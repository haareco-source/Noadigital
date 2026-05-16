import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Inicio", href: "/", isExternal: false },
    { name: "Quiénes Somos", href: "#quienes-somos", isExternal: false, isScroll: true },
    { name: "Servicios", href: "#servicios", isExternal: false, isScroll: true },
    { name: "Proyectos", href: "/proyectos", isExternal: false },
    { name: "IA Arquitectura", href: "/ia-arquitectura", isExternal: false },
    { name: "Contacto", href: "#contacto", isExternal: false, isScroll: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-header shadow-md" : "bg-header"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">NOADIGITAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isScroll ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="text-header-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-header-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#contacto" onClick={() => scrollToSection("contacto")}>
                Hablemos de tu proyecto
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-header-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-header-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-header-foreground/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.isScroll ? (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className="text-header-foreground hover:text-primary transition-colors font-medium text-left px-2"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-header-foreground hover:text-primary transition-colors font-medium px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <a
                  href="#contacto"
                  onClick={() => {
                    scrollToSection("contacto");
                  }}
                >
                  Hablemos de tu proyecto
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
