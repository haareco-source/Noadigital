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

      {/* Iframe Container */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="rounded-xl overflow-hidden shadow-md bg-card border border-border">
            <iframe
              src="https://opal.google/app/1xXhX3N6pcNSgefj65XZY2za5WeZHfaod"
              width="100%"
              height="800"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Herramienta de IA para Arquitectura"
              className="block"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IaArquitectura;
