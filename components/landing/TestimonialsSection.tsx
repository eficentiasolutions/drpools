"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { googleReviewsConfig, generateReviewSchema, formatRelativeDate } from "@/lib/google-reviews";

// Review Schema Markup para SEO - Generado dinámicamente desde Google Reviews
const reviewSchema = generateReviewSchema(googleReviewsConfig);

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Generar testimonials desde la config de Google Reviews
  const testimonials = useMemo(() => {
    return googleReviewsConfig.reviews.map((review) => ({
      name: review.author,
      role: `Cliente verificado en Google`,
      image: undefined,
      quote: review.text,
      rating: review.rating,
      isGoogleReview: true,
      profileUrl: review.profileUrl,
    }));
  }, []);

  // Estado del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Calcular cuántas reviews mostrar por pantalla
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play cada 5 segundos
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isInView]);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Avatar genérico para reviews sin foto
  const getAvatar = (name: string, index: number) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",
      "bg-pink-500",
      "bg-teal-500",
    ];

    return (
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base ${colors[index % colors.length]}`}
      >
        {initials}
      </div>
    );
  };

  // Variantes de animación para el slide
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <>
      {/* Review Schema Markup para SEO - Rich Snippets con estrellas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16 relative z-10"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/drpools-logo.png"
                alt="DR Pools Logo"
                width={180}
                height={80}
                className="h-16 w-auto"
              />
            </div>

            <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              💬 Testimonios Reales
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Lo que Dicen Nuestros{" "}
              <span className="gradient-text">Clientes Felices</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Historias reales de propietarios que recuperaron su tiempo libre
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2"
                >
                  {testimonials
                    .slice(
                      currentIndex * itemsPerView,
                      currentIndex * itemsPerView + itemsPerView
                    )
                    .map((testimonial, idx) => {
                      const globalIndex = currentIndex * itemsPerView + idx;
                      return (
                        <div
                          key={`${currentIndex}-${globalIndex}`}
                          className="testimonial-card group hover:shadow-xl transition-all duration-300 relative pt-6"
                        >
                          {/* Google Badge */}
                          {testimonial.isGoogleReview && (
                            <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md border border-gray-100 z-10">
                              <svg className="w-6 h-6" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                              </svg>
                            </div>
                          )}

                          <div className="flex items-start gap-3 md:gap-4 mb-4">
                            {testimonial.image ? (
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full object-cover shadow-md"
                              />
                            ) : (
                              getAvatar(testimonial.name, globalIndex)
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                              </div>
                              <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 md:w-3.5 md:h-3.5 ${i < testimonial.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "fill-gray-200 text-gray-200"
                                      }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <Quote className="w-6 h-6 md:w-8 md:h-8 text-secondary/20 mb-2 md:mb-3 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {testimonial.quote}
                          </p>

                          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      );
                    })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex
                      ? "bg-secondary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Ir a slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View all on Google CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 relative z-10"
          >
            <a
              href={googleReviewsConfig.businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Ver todas las reviews en Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
