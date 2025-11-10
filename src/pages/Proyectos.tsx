import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";

const Proyectos = () => {
  const projects = [
    {
      title: "Telemetría Industrial para Ledesma S.A.A.I.",
      description: "Sistema integral de monitoreo remoto de equipos industriales con sensores IoT, transmisión de datos en tiempo real y dashboards predictivos para optimización de mantenimiento.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      category: "Transformación Digital"
    },
    {
      title: "Mantenimiento Predictivo con IA",
      description: "Implementación de algoritmos de Machine Learning para predecir fallas en maquinaria industrial, reduciendo costos de mantenimiento en un 35% y mejorando la disponibilidad operativa.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
      category: "Transformación Digital"
    },
    {
      title: "Prototipado de Repuestos Industriales",
      description: "Diseño y fabricación de piezas de repuesto mediante impresión 3D profesional, reduciendo tiempos de espera de 45 días a 48 horas y costos en un 60%.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
      category: "Impresión 3D"
    },
    {
      title: "Sistema de CCTV Inteligente",
      description: "Instalación de 120 cámaras de vigilancia con analítica de video IA para detección de intrusos y análisis de comportamiento en planta industrial de 15,000 m².",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
      category: "Seguridad Electrónica"
    },
    {
      title: "Migración de Infraestructura IT",
      description: "Actualización completa de red corporativa con 80 puntos de datos, servidores virtualizados, backup automático y sistema de gestión centralizada para empresa de 200 usuarios.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      category: "Soporte Técnico"
    },
    {
      title: "Capacitación en IA para Ledesma",
      description: "Programa intensivo de 80 horas en Inteligencia Artificial aplicada a procesos industriales, capacitando a 25 profesionales en técnicas de Machine Learning y análisis predictivo.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      category: "Capacitaciones"
    },
    {
      title: "Automatización de Línea de Producción",
      description: "Implementación de sistema robotizado para proceso de empaquetado, incrementando la productividad en 40% y mejorando la trazabilidad de productos.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      category: "Transformación Digital"
    },
    {
      title: "Fabricación de Herramientas Personalizadas",
      description: "Diseño y producción de plantillas, guías y herramientas especializadas en materiales técnicos mediante tecnologías de manufactura aditiva.",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c4?auto=format&fit=crop&q=80&w=800",
      category: "Impresión 3D"
    },
    {
      title: "Control de Accesos Biométrico",
      description: "Sistema integrado de control de acceso con reconocimiento facial y huella dactilar para complejo corporativo de múltiples edificios.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
      category: "Seguridad Electrónica"
    },
    {
      title: "Soporte Técnico Remoto 24/7",
      description: "Servicio de mesa de ayuda con monitoreo proactivo, gestión de incidentes y soporte multicanal para empresa de logística con operaciones continuas.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      category: "Soporte Técnico"
    },
    {
      title: "Workshop de Robótica Educativa",
      description: "Formación en robótica educativa y programación para docentes y estudiantes de nivel secundario, alcanzando a más de 150 participantes en 5 instituciones.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      category: "Capacitaciones"
    },
    {
      title: "Dashboard de Gestión Energética",
      description: "Plataforma web para monitoreo en tiempo real de consumo energético, identificación de picos y recomendaciones automáticas de eficiencia energética.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "Transformación Digital"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted">
          <div className="container text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Casos de éxito en transformación digital, impresión 3D, seguridad y capacitación tecnológica
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubrí cómo hemos ayudado a empresas e instituciones del norte argentino a modernizar sus operaciones, optimizar procesos y capacitar a sus equipos en las tecnologías más avanzadas.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Trabajemos juntos para convertir tu idea en una solución tecnológica real
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-background text-foreground hover:bg-background/90 font-medium transition-colors"
              >
                Contactanos
              </Link>
              <a 
                href="https://wa.me/5493886525051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Proyectos;
