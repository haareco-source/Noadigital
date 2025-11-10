import { Link } from "react-router-dom";
import { ArrowLeft, Zap, TrendingUp, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";

const TransformacionDigital = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Optimización de Procesos",
      description: "Automatización y digitalización de flujos de trabajo para mayor eficiencia operativa"
    },
    {
      icon: TrendingUp,
      title: "Decisiones Basadas en Datos",
      description: "Análisis en tiempo real y dashboards inteligentes para mejor toma de decisiones"
    },
    {
      icon: Shield,
      title: "Mayor Competitividad",
      description: "Adopción de tecnologías de vanguardia para mantenerse a la delantera del mercado"
    },
    {
      icon: Database,
      title: "Integración de Sistemas",
      description: "Conectividad total entre herramientas y plataformas para operaciones unificadas"
    }
  ];

  const technologies = [
    "Internet of Things (IoT)",
    "Cloud Computing",
    "Inteligencia Artificial",
    "Big Data & Analytics",
    "Automatización de Procesos (RPA)",
    "Integración de APIs"
  ];

  const relatedProjects = [
    {
      title: "Telemetría Industrial para Ledesma S.A.A.I.",
      description: "Sistema integral de monitoreo remoto de equipos industriales con sensores IoT, transmisión de datos en tiempo real y dashboards predictivos para optimización de mantenimiento.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      category: "Industria"
    },
    {
      title: "Mantenimiento Predictivo con IA",
      description: "Implementación de algoritmos de Machine Learning para predecir fallas en maquinaria industrial, reduciendo costos de mantenimiento en un 35% y mejorando la disponibilidad operativa.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
      category: "IA & Analytics"
    },
    {
      title: "Dashboard de Gestión Energética",
      description: "Plataforma web para monitoreo en tiempo real de consumo energético, identificación de picos y recomendaciones automáticas de eficiencia energética.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "IoT & Cloud"
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
                  <Zap className="w-4 h-4" />
                  Industria 4.0 & 5.0
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Transformación Digital y Consultoría
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Llevamos tu empresa al siguiente nivel con tecnologías inteligentes y estrategias de digitalización personalizadas
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contacto">Consultar Soluciones</a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                  alt="Transformación Digital" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es la Transformación Digital?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                La transformación digital es el proceso de integrar tecnologías digitales en todas las áreas de tu negocio, cambiando fundamentalmente la forma en que operas y entregas valor a tus clientes.
              </p>
              <p>
                En <span className="text-primary font-semibold">FABRI3D</span>, acompañamos a empresas en su proceso de modernización mediante la implementación de soluciones de <strong>IoT, Cloud Computing, Inteligencia Artificial y automatización</strong>, adaptadas a las necesidades específicas de cada industria.
              </p>
              <p>
                Nuestro enfoque combina consultoría estratégica con implementación técnica, garantizando que cada solución genere un impacto medible en eficiencia, productividad y rentabilidad.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beneficios de la Transformación Digital</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tecnologías que Implementamos</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos Relacionados</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Casos reales de transformación digital en empresas del norte argentino
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
              ¿Querés implementar Transformación Digital en tu empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hablemos sobre cómo podemos ayudarte a modernizar tus procesos y llevar tu negocio al siguiente nivel
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

export default TransformacionDigital;
