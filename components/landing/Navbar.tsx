"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const serviceLinks = [
  { label: "Mantenimiento de Piscinas", href: "/mantenimiento-piscinas-tenerife" },
  { label: "Limpieza de Piscinas", href: "/limpieza-piscinas-tenerife" },
];

const navLinks = [
  { label: "Resultados", href: "#resultados" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to get the correct Href based on current route
  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const event = new CustomEvent('plan-selected', { detail: 'Revisión Gratuita' });
      window.dispatchEvent(event);
      const targetElement = document.getElementById('formulario-contacto') || document.getElementById('contacto');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      e.preventDefault();
      window.location.href = "/?plan=Revisión%20Gratuita#formulario-contacto";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-gradient-to-b from-white/90 to-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Inicio">
            <div className="transition-transform hover:scale-105 relative">
              <Image
                src="/drpools-logo.png"
                alt="DR Pools"
                width={140}
                height={56}
                className="h-12 md:h-14 w-auto object-contain"
                style={{ width: 'auto' }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Servicios Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`font-medium transition-colors hover:text-brand-primary flex items-center gap-1 ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-brand-dark/90"}`}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href={isHome ? "#servicios" : "/#servicios"}
                    className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-brand-primary/10 hover:text-brand-primary transition-colors border-t border-gray-100 mt-1 pt-2"
                  >
                    Ver todos los servicios
                  </a>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={getHref(link.href)}
                className={`font-medium transition-colors hover:text-brand-primary ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-brand-dark/90"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getHref("#contacto")}
              onClick={handleCtaClick}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${isScrolled || isMobileMenuOpen
                ? "bg-secondary text-white hover:bg-secondary/90"
                : "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20"
                }`}
            >
              Revisión Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden p-2 rounded-lg ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-brand-dark"
              }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white rounded-2xl shadow-lg p-6 mb-4"
          >
            <div className="flex flex-col gap-4">
              {/* Servicios */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-foreground font-medium py-2 hover:text-secondary transition-colors flex items-center gap-1 w-full text-left"
                >
                  Servicios
                  <ChevronDown className={`w-4 h-4 transition-transform ml-auto ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {serviceLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-muted-foreground font-medium py-1.5 text-sm hover:text-secondary transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                    <a
                      href={isHome ? "#servicios" : "/#servicios"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-muted-foreground font-medium py-1.5 text-sm hover:text-secondary transition-colors"
                    >
                      Ver todos los servicios
                    </a>
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={getHref(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getHref("#contacto")}
                onClick={handleCtaClick}
                className="btn-glow text-center mt-2"
              >
                Revisión Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
