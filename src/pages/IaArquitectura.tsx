import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const IaArquitectura = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              IA aplicada a la Arquitectura
            </h1>
            <p className="text-lg text-muted-foreground">
              Explorá el potencial de la inteligencia artificial para el diseño, la planificación y la visualización arquitectónica. Generá renders, optimizá espacios y potenciá tu creatividad con herramientas de última generación.
            </p>
          </div>
        </div>
      </section>

      {/* Presentation Card */}
      <section className="py-12 md:py-16">
        <div className="container max-w-2xl">
          <div className="rounded-xl bg-card border border-border shadow-md overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Diseñador de Fachadas con IA
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Experimentá el futuro del diseño arquitectónico. Nuestro asistente de IA te ayuda a visualizar, crear y optimizar fachadas de edificios en segundos, combinando creatividad humana con inteligencia artificial.
              </p>
              <a
                href="https://opal.google/app/1xXhX3N6pcNSgefj65XZY2za5WeZHfaod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Iniciar Asistente de Diseño AI
                <span className="text-xl">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IaArquitectura;
