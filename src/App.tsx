import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TransformacionDigital from "./pages/TransformacionDigital";
import Impresion3D from "./pages/Impresion3D";
import SeguridadElectronica from "./pages/SeguridadElectronica";
import SoporteTecnico from "./pages/SoporteTecnico";
import Capacitaciones from "./pages/Capacitaciones";
import Proyectos from "./pages/Proyectos";
import IaArquitectura from "./pages/IaArquitectura";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/transformacion-digital" element={<TransformacionDigital />} />
          <Route path="/servicios/impresion-3d" element={<Impresion3D />} />
          <Route path="/servicios/seguridad-electronica" element={<SeguridadElectronica />} />
          <Route path="/servicios/soporte-tecnico" element={<SoporteTecnico />} />
          <Route path="/servicios/capacitaciones" element={<Capacitaciones />} />
          <Route path="/proyectos" element={<Proyectos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
