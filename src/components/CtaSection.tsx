import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com o backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Pronto para
              <span className="bg-gradient-primary bg-clip-text text-transparent"> transformar </span>
              seu negócio?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a milhares de empreendedores que já descobriram 
              o poder de vender mais com menos esforço.
            </p>
            
            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {[
                "14 dias grátis para testar tudo",
                "Setup completo em 5 minutos",
                "Suporte especializado incluído",
                "Sem fidelidade ou taxas ocultas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Comece Grátis Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-background/80 backdrop-blur-sm">
                Falar com Consultor
              </Button>
            </div>
          </div>
          
          {/* Right Form */}
          <Card className="shadow-glow border-0 bg-background/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Receba uma demonstração personalizada
                </h3>
                <p className="text-muted-foreground">
                  Vamos mostrar como o BoraVender pode revolucionar seu negócio
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Seu nome completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    E-mail profissional
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Quero Minha Demonstração Grátis
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossos termos e política de privacidade. 
                  Prometemos não enviar spam! 🤝
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full text-sm font-semibold">
            🛡️ Garantia de satisfação de 30 dias ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </section>
  );
};