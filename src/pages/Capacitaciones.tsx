import { Link } from "react-router-dom";
import { ArrowLeft, Users, Brain, Cpu, GraduationCap, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectCard from "@/components/ProjectCard";

const Capacitaciones = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Conocimiento Actualizado",
      description: "Contenidos basados en las últimas tecnologías y tendencias de la Industria 4.0 y 5.0"
    },
    {
      icon: Users,
      title: "Práctica Real",
      description: "Ejercicios y proyectos aplicados a casos reales de la industria"
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Certificados oficiales que acreditan las competencias adquiridas"
    },
    {
      icon: Clock,
      title: "Flexibilidad",
      description: "Modalidades presenciales y virtuales adaptadas a tu disponibilidad"
    }
  ];

  const courses = [
    {
      title: "Inteligencia Artificial Aplicada",
      description: "Fundamentos de IA, Machine Learning y aplicaciones prácticas en la industria",
      duration: "40 horas",
      level: "Intermedio"
    },
    {
      title: "Robótica y Automatización",
      description: "Programación de robots, sistemas automatizados y control industrial",
      duration: "32 horas",
      level: "Avanzado"
    },
    {
      title: "Impresión 3D Profesional",
      description: "Diseño CAD, preparación de archivos y operación de impresoras 3D",
      duration: "24 horas",
      level: "Básico"
    },
    {
      title: "Transformación Digital",
      description: "Estrategias digitales, IoT y tecnologías de la Industria 4.0",
      duration: "28 horas",
      level: "Intermedio"
    }
  ];

  const relatedProjects = [
    {
      title: "Capacitación en IA para Ledesma S.A.A.I.",
      description: "Programa intensivo de 80 horas en Inteligencia Artificial aplicada a procesos industriales, capacitando a 25 profesionales en técnicas de Machine Learning y análisis predictivo.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      category: "Capacitación Corporativa"
    },
    {
      title: "Curso de Robótica en Instituciones Educativas",
      description: "Formación en robótica educativa y programación para docentes y estudiantes de nivel secundario y superior, alcanzando a más de 150 participantes.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      category: "Educación"
    },
    {
      title: "Workshop de Impresión 3D Industrial",
      description: "Talleres prácticos sobre diseño paramétrico, preparación de modelos y operación de impresoras 3D profesionales para equipos de ingeniería.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      category: "Manufactura"
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
                  <GraduationCap className="w-4 h-4" />
                  Educación Tecnológica
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Cursos y Capacitaciones Tecnológicas
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Formación especializada en tecnologías emergentes para profesionales, empresas e instituciones educativas
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contacto">Consultar Capacitaciones</a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Capacitaciones Tecnológicas" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Formación Profesional en Tecnología</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                En <span className="text-primary font-semibold">NOADIGITAL</span>, ofrecemos programas de capacitación diseñados para profesionales, equipos técnicos y estudiantes que buscan desarrollar competencias en las tecnologías más demandadas de la actualidad.
              </p>
              <p>
                Nuestros cursos combinan teoría y práctica, con casos reales de aplicación industrial, ejercicios hands-on y proyectos finales que permiten consolidar los conocimientos adquiridos. Cada participante recibe certificación oficial y acceso a material de apoyo continuo.
              </p>
              <p>
                Con más de 18 años de experiencia en el sector tecnológico, nuestro equipo de instructores está conformado por ingenieros y especialistas activos en proyectos de transformación digital, robótica, IA e impresión 3D.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por Qué Capacitarte con NOADIGITAL?</h2>
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

        {/* Courses */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Programas de Capacitación</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Cpu className="w-8 h-8 text-primary" />
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {course.level}
                      </span>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos de Capacitación Realizados</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experiencia formando profesionales en empresas líderes e instituciones educativas
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
              ¿Querés capacitar a tu equipo o participar de nuestros cursos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Consultanos sobre programas personalizados, fechas disponibles y modalidades de capacitación
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

export default Capacitaciones;
