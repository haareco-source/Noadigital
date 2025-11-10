import { Link } from "react-router-dom";
import { ArrowLeft, Headphones, Wifi, Server, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";
import serviceSupport from "@/assets/service-support.jpg";

const SoporteTecnico = () => {
  const benefits = [
    {
      icon: Headphones,
      title: "Atención Rápida",
      description: "Respuesta inmediata a incidentes críticos y mesa de ayuda multicanal"
    },
    {
      icon: Wifi,
      title: "Conectividad Estable",
      description: "Redes optimizadas para máxima velocidad y disponibilidad operativa"
    },
    {
      icon: Server,
      title: "Infraestructura Confiable",
      description: "Servidores, backup y virtualización para continuidad de negocio"
    },
    {
      icon: HardDrive,
      title: "Gestión Proactiva",
      description: "Monitoreo preventivo para anticipar fallas y optimizar recursos"
    }
  ];

  const services = [
    "Soporte On-Site y Remoto",
    "Configuración de Redes LAN/WAN",
    "Instalación de Servidores",
    "Backup y Recuperación",
    "Mantenimiento Preventivo",
    "Virtualización de Servidores"
  ];

  const relatedProjects = [
    {
      title: "Migración de Infraestructura IT",
      description: "Actualización completa de red corporativa con 80 puntos de datos, servidores virtualizados, backup automático y sistema de gestión centralizada para empresa de 200 usuarios.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      category: "Infraestructura"
    },
    {
      title: "Soporte Técnico Remoto 24/7",
      description: "Servicio de mesa de ayuda con monitoreo proactivo, gestión de incidentes y soporte multicanal para empresa de logística con operaciones continuas.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      category: "Soporte"
    },
    {
      title: "Red Corporativa de Alta Velocidad",
      description: "Implementación de red empresarial con switches gestionables, WiFi empresarial y segmentación de VLANs para mejorar seguridad y rendimiento.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800",
      category: "Redes"
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
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Headphones className="w-4 h-4" />
                  IT Support
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Soporte Técnico y Redes
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Mantenimiento, optimización y soporte integral para la infraestructura tecnológica de tu empresa
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contacto">Solicitar Soporte</a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={serviceSupport} 
                  alt="Soporte Técnico" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Soporte Técnico Profesional</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                En <span className="text-primary font-semibold">FABRI3D</span>, ofrecemos <strong>servicios de soporte técnico y gestión de infraestructura IT</strong> diseñados para garantizar la continuidad operativa de tu empresa.
              </p>
              <p>
                Nuestro equipo de técnicos especializados brinda asistencia on-site y remota para resolver incidentes, realizar mantenimiento preventivo y optimizar el rendimiento de equipos, redes y servidores. Trabajamos con empresas de todos los tamaños, desde pequeñas oficinas hasta grandes instalaciones industriales.
              </p>
              <p>
                Además, implementamos soluciones de red estructurada, servidores virtualizados, sistemas de backup automático y políticas de seguridad para proteger la información crítica de tu negocio. Nuestro enfoque proactivo permite anticipar problemas antes de que afecten tu productividad.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beneficios de Nuestro Soporte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Servicios que Ofrecemos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos de Infraestructura IT</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Implementaciones de redes, servidores y soporte técnico en empresas
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitás soporte técnico o mejorar tu red?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactanos para recibir asistencia inmediata o planificar una actualización de infraestructura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/#contacto">Contactanos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="https://wa.me/5493886525051" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SoporteTecnico;
