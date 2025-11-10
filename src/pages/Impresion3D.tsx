import { Link } from "react-router-dom";
import { ArrowLeft, Box, Wrench, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";
import service3D from "@/assets/service-3d.jpg";

const Impresion3D = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Rapidez en Producción",
      description: "Prototipado y fabricación de piezas en días en lugar de semanas"
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      description: "Ahorro de hasta 60% comparado con métodos tradicionales de manufactura"
    },
    {
      icon: Wrench,
      title: "Personalización Total",
      description: "Diseños a medida adaptados a necesidades específicas sin costos adicionales"
    },
    {
      icon: Box,
      title: "Versatilidad de Materiales",
      description: "Amplia gama de materiales técnicos para diferentes aplicaciones industriales"
    }
  ];

  const materials = [
    "PLA (Ácido Poliláctico)",
    "ABS (Acrilonitrilo Butadieno Estireno)",
    "PETG (Tereftalato de Polietileno Glicol)",
    "TPU (Poliuretano Termoplástico)",
    "Nylon (PA)",
    "Resinas Especializadas"
  ];

  const relatedProjects = [
    {
      title: "Prototipado de Repuestos Industriales",
      description: "Diseño y fabricación de piezas de repuesto mediante impresión 3D profesional, reduciendo tiempos de espera de 45 días a 48 horas y costos en un 60%.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
      category: "Industria"
    },
    {
      title: "Fabricación de Herramientas Personalizadas",
      description: "Diseño y producción de plantillas, guías y herramientas especializadas en materiales técnicos mediante tecnologías de manufactura aditiva.",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c4?auto=format&fit=crop&q=80&w=800",
      category: "Manufactura"
    },
    {
      title: "Modelos Arquitectónicos y Maquetas",
      description: "Creación de maquetas detalladas para presentaciones de proyectos arquitectónicos y de ingeniería con alta precisión y acabados profesionales.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      category: "Arquitectura"
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
                  <Box className="w-4 h-4" />
                  Manufactura Aditiva
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Impresión 3D Profesional
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Prototipado rápido y fabricación de piezas industriales con tecnología de vanguardia
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contacto">Solicitar Cotización</a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={service3D} 
                  alt="Impresión 3D" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicios de Impresión 3D Industrial</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                La <strong>impresión 3D profesional</strong> ha revolucionado la manera en que se diseñan y fabrican piezas. En <span className="text-primary font-semibold">FABRI3D</span>, ofrecemos servicios completos de manufactura aditiva para empresas que buscan optimizar sus procesos de producción.
              </p>
              <p>
                Desde prototipado rápido hasta fabricación de piezas finales, trabajamos con una amplia variedad de materiales técnicos que garantizan resistencia, precisión y durabilidad. Nuestro equipo de ingenieros se encarga del diseño CAD, preparación de archivos y producción de cada pieza con los más altos estándares de calidad.
              </p>
              <p>
                Ya sea que necesites repuestos industriales, herramientas personalizadas, modelos arquitectónicos o componentes técnicos, tenemos la capacidad y experiencia para materializar tu proyecto.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ventajas de la Impresión 3D</h2>
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

        {/* Materials */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Materiales Disponibles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium">{material}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos Realizados</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ejemplos de piezas y componentes fabricados con impresión 3D profesional
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
              ¿Necesitás imprimir piezas en 3D?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Envianos tu diseño o consultanos para desarrollar una solución a medida
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

export default Impresion3D;
