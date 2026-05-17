import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Printer, Shield, Wrench, GraduationCap, MapPin, Phone, Mail, Globe, Facebook, Linkedin, Instagram, Youtube, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado exitosamente. Te contactaremos pronto!");
    setFormData({ name: "", email: "", message: "" });
  };

  const heroSlides = [
    {
      title: "Transformación Digital y Consultoría",
      description: "Implementamos tecnologías IoT, Cloud, IA y automatización para modernizar tu empresa",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
      link: "/servicios/transformacion-digital"
    },
    {
      title: "Impresión 3D Profesional",
      description: "Prototipado rápido y fabricación de piezas industriales con tecnología de manufactura aditiva",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1920",
      link: "/servicios/impresion-3d"
    },
    {
      title: "Seguridad Electrónica y CCTV",
      description: "Sistemas de videovigilancia inteligente, control de accesos y monitoreo integral",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920",
      link: "/servicios/seguridad-electronica"
    },
    {
      title: "Soporte Técnico y Redes",
      description: "Mantenimiento, optimización y gestión de infraestructura IT para tu organización",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920",
      link: "/servicios/soporte-tecnico"
    },
    {
      title: "Cursos y Capacitaciones Tecnológicas",
      description: "Formación especializada en IA, robótica, impresión 3D y tecnologías emergentes",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920",
      link: "/servicios/capacitaciones"
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: "Transformación Digital y Consultoría",
      description: "Implementamos tecnologías IoT, Cloud, IA y automatización para modernizar tu empresa",
      link: "/servicios/transformacion-digital"
    },
    {
      icon: Printer,
      title: "Impresión 3D Profesional",
      description: "Prototipado rápido y fabricación de piezas industriales con tecnología de manufactura aditiva",
      link: "/servicios/impresion-3d"
    },
    {
      icon: Shield,
      title: "Seguridad Electrónica y CCTV",
      description: "Sistemas de videovigilancia inteligente, control de accesos y monitoreo integral",
      link: "/servicios/seguridad-electronica"
    },
    {
      icon: Wrench,
      title: "Soporte Técnico y Redes",
      description: "Mantenimiento, optimización y gestión de infraestructura IT para tu organización",
      link: "/servicios/soporte-tecnico"
    },
    {
      icon: GraduationCap,
      title: "Cursos y Capacitaciones Tecnológicas",
      description: "Formación especializada en IA, robótica, impresión 3D y tecnologías emergentes",
      link: "/servicios/capacitaciones"
    }
  ];

  const featuredProjects = [
    {
      title: "Telemetría Industrial para Ledesma S.A.A.I.",
      description: "Sistema integral de monitoreo remoto de equipos industriales con sensores IoT y dashboards predictivos",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      category: "Transformación Digital"
    },
    {
      title: "Prototipado de Repuestos Industriales",
      description: "Diseño y fabricación de piezas mediante impresión 3D, reduciendo tiempos de 45 días a 48 horas",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
      category: "Impresión 3D"
    },
    {
      title: "Sistema de CCTV Inteligente",
      description: "120 cámaras con analítica de video IA para detección de intrusos en planta de 15,000 m²",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
      category: "Seguridad"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Carousel Section */}
      <section className="relative pt-20 overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] md:h-[700px] overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/90">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover opacity-40"
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="container relative z-10 h-full flex items-center">
                    <div className="max-w-3xl text-primary-foreground">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 animate-slide-up">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                          <Link to={slide.link}>Conocer más</Link>
                        </Button>
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                          <a href="#contacto">Contactanos</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-foreground/50 text-primary-foreground border-primary-foreground/20 hover:bg-foreground/70" />
          <CarouselNext className="right-4 bg-foreground/50 text-primary-foreground border-primary-foreground/20 hover:bg-foreground/70" />
        </Carousel>
      </section>

      {/* About Section */}
      <section id="quienes-somos" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Equipo NOADIGITAL" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ingeniería, Innovación y Transformación
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                NOADIGITAL combina ingeniería, innovación y automatización para brindar soluciones adaptadas a la Industria 4.0 y 5.0.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">+18</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">+100</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">+30</div>
                  <div className="text-sm text-muted-foreground">Capacitaciones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Nuestros Servicios Tecnológicos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Casos de Éxito</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/proyectos">Ver más proyectos <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contactanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Libertador Gral. San Martín, Jujuy</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+5493886525051">+54 9 3886 525051</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:haareco@gmail.com">haareco@gmail.com</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <Textarea placeholder="Mensaje" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              <Button type="submit" className="w-full">Enviar</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.365245277395!2d-64.78754892495785!3d-23.807543870682164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941ac1c153945d6f%3A0xb4b611a755fb49c5!2sNoadigital!5e1!3m2!1ses!2sar!4v1774986332207!5m2!1ses!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de NOADIGITAL"
        />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
