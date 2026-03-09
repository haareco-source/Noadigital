import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary">NOADIGITAL</span>
            </Link>
            <p className="text-footer-foreground/70 mb-4">
              Innovación y Tecnología Aplicada para la transformación digital de tu empresa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-footer-foreground/70 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quienes-somos")}
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <Link to="/proyectos" className="text-footer-foreground/70 hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicios/transformacion-digital"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Transformación Digital
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/impresion-3d"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Impresión 3D
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/seguridad-electronica"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Seguridad Electrónica
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/soporte-tecnico"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/capacitaciones"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  Capacitaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-footer-foreground/70">
                  Libertador General San Martín, Jujuy, Argentina
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+5493886525051"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  +54 9 3886 525051
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:haareco@gmail.com"
                  className="text-footer-foreground/70 hover:text-primary transition-colors"
                >
                  haareco@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-footer-foreground/70">www.noadigital.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-footer-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-footer-foreground/70 text-sm">
              © 2025 FABRI3D — Innovación y Tecnología Aplicada
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/fabri3d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-foreground/70 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
