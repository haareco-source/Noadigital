import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Camera, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";

const SeguridadElectronica = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Protección 24/7",
      description: "Monitoreo continuo de tus instalaciones para detectar y prevenir incidentes"
    },
    {
      icon: Camera,
      title: "Vigilancia Inteligente",
      description: "Cámaras con analítica de video IA para detección automática de eventos"
    },
    {
      icon: Lock,
      title: "Control de Accesos",
      description: "Gestión centralizada de permisos con tecnología biométrica y tarjetas"
    },
    {
      icon: AlertTriangle,
      title: "Respuesta Inmediata",
      description: "Alertas en tiempo real y protocolos de acción ante eventos críticos"
    }
  ];

  const technologies = [
    "CCTV IP y Analógico HD",
    "Reconocimiento Facial",
    "Lectores Biométricos",
    "Sensores de Intrusión",
    "Sistemas de Alarma",
    "Video Analytics con IA"
  ];

  const relatedProjects = [
    {
      title: "Sistema de CCTV Inteligente",
      description: "Instalación de 120 cámaras de vigilancia con analítica de video IA para detección de intrusos y análisis de comportamiento en planta industrial de 15,000 m².",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
      category: "Videovigilancia"
    },
    {
      title: "Control de Accesos Biométrico",
      description: "Sistema integrado de control de acceso con reconocimiento facial y huella dactilar para complejo corporativo de múltiples edificios.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
      category: "Control de Acceso"
    },
    {
      title: "Centro de Monitoreo en Tiempo Real",
      description: "Implementación de sala de control centralizada con visualización de múltiples cámaras, registro de eventos y respuesta coordinada ante incidentes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      category: "Monitoreo"
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
                  <Shield className="w-4 h-4" />
                  Seguridad Integral
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Seguridad Electrónica y CCTV
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Protegé tu empresa con sistemas de videovigilancia, control de accesos y monitoreo inteligente
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contacto">Solicitar Evaluación</a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" 
                  alt="Seguridad Electrónica" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Soluciones de Seguridad Profesional</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                En <span className="text-primary font-semibold">NOADIGITAL</span>, diseñamos e implementamos <strong>sistemas de seguridad electrónica</strong> adaptados a las necesidades específicas de tu empresa, industria o institución.
              </p>
              <p>
                Nuestras soluciones combinan cámaras de videovigilancia de última generación, control de accesos biométrico, sensores de intrusión y sistemas de alarma integrados, todo gestionado desde una plataforma centralizada con capacidad de monitoreo remoto.
              </p>
              <p>
                Con experiencia en instalaciones de gran escala, garantizamos cobertura total, grabación de alta calidad, almacenamiento seguro y respuesta inmediata ante eventos críticos. Además, incorporamos tecnología de analítica de video con Inteligencia Artificial para detección proactiva de amenazas.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beneficios de Nuestros Sistemas</h2>
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

        {/* Technologies */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tecnologías Implementadas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos de Seguridad Realizados</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Instalaciones de CCTV y control de accesos en empresas del norte argentino
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
              ¿Necesitás proteger tu empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Evaluamos tu espacio y diseñamos un sistema de seguridad a medida
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

export default SeguridadElectronica;
