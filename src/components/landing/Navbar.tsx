import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";
import logoImage from "@/assets/logo-v3.png";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="transition-transform hover:scale-105">
              <img
                src={logoImage}
                alt="Agua Más Segura"
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors hover:text-secondary ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${isScrolled || isMobileMenuOpen
                ? "bg-secondary text-white hover:bg-secondary/90"
                : "bg-white text-primary hover:bg-white/90"
                }`}
            >
              Inspección Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-glow text-center mt-2"
              >
                Inspección Gratis
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
