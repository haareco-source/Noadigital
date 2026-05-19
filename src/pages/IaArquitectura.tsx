import { Sparkles, Building2, Megaphone, Share2, Eye, Bot, Briefcase, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const aiAreas = [
  {
    icon: Building2,
    title: "IA aplicada a la Arquitectura",
    description:
      "Generá renders, fachadas y visualizaciones arquitectónicas en segundos. Optimizá espacios y potenciá tu creatividad con IA generativa.",
    cta: "Iniciar Asistente de Diseño AI",
    link: "https://opal.google/app/1yE5U0YQod_e6wh-pTy_hX0Yws3mMKK_A",
    featured: true,
  },
  {
    icon: Megaphone,
    title: "IA aplicada al Marketing",
    description:
      "Automatizá campañas, segmentá audiencias con precisión y generá copys persuasivos. Maximizá tu ROI con análisis predictivo e insights en tiempo real.",
  },
  {
    icon: Share2,
    title: "Contenido para Redes Sociales",
    description:
      "Creá publicaciones, reels, imágenes y calendarios editoriales con IA. Mantené tu marca activa y coherente sin perder horas de producción.",
  },
  {
    icon: Briefcase,
    title: "IA para Empresas",
    description:
      "Automatizá procesos, atención al cliente y reportes internos. Implementá asistentes inteligentes que potencian la productividad de tu equipo.",
  },
  {
    icon: Eye,
    title: "Visión por Computadora",
    description:
      "Detección de objetos, control de calidad, reconocimiento facial y análisis de video. Aplicaciones industriales, seguridad y monitoreo inteligente.",
  },
  {
    icon: Bot,
    title: "Asistentes y Chatbots IA",
    description:
      "Bots conversacionales entrenados con la información de tu negocio. Disponibles 24/7 en WhatsApp, web y redes sociales.",
  },
];

const IaAplicada = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Inteligencia Artificial
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">IA Aplicada</h1>
            <p className="text-lg text-muted-foreground">
              Soluciones de Inteligencia Artificial aplicadas a las áreas más demandadas de la actualidad: arquitectura,
              marketing, redes sociales, visión por computadora y mucho más. Potenciá tu negocio con tecnología de
              vanguardia.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className={`group relative rounded-xl border bg-card p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                    area.featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
                  }`}
                >
                  {area.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" /> Destacado
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{area.description}</p>
                  {area.link ? (
                    <a
                      href={area.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-3 rounded-lg transition-colors shadow"
                    >
                      {area.cta}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary hover:text-primary font-semibold px-5 py-3 rounded-lg transition-colors"
                    >
                      Consultar
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-border p-8 md:p-12 text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Querés implementar IA en tu empresa?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Analizamos tus procesos y diseñamos una solución de Inteligencia Artificial a medida para tu industria.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IaAplicada;
