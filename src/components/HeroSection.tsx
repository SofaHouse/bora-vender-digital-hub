import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                BoraVender
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              A solução completa de PDV com e-commerce integrado que vai{" "}
              <span className="text-primary font-semibold">revolucionar suas vendas</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Unifique suas vendas online e físicas, automatize processos e acompanhe 
              resultados em tempo real. Desenvolvido especialmente para empreendedores 
              que querem crescer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Experimente Grátis
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                ✨ Grátis por 14 dias
              </span>
              <span className="flex items-center gap-2">
                🚀 Setup em 5 minutos
              </span>
              <span className="flex items-center gap-2">
                💳 Sem cartão de crédito
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroDashboard} 
                alt="Dashboard BoraVender"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                +127% vendas
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                Tempo real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};