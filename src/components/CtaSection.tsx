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
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com o backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-hero overflow-hidden w-full">
      {" "}
      {/* 'relative' e 'absolute' removidos */}
      {/* As decorações de fundo com 'absolute' foram removidas, pois não funcionariam sem o posicionamento */}
      <div className="container mx-auto px-2">
        {" "}
        {/* 'relative' removido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-6 leading-tight">
              Pronto para
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                transformar{" "}
              </span>
              seu negócio?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-full mx-auto lg:max-w-none lg:mx-0">
              Junte-se a milhares de empreendedores que já descobriram o poder
              de vender mais com menos esforço.
            </p>

            {/* Benefits list */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 md:mb-8 max-w-full mx-auto lg:max-w-md lg:mx-0 text-left">
              {[
                "14 dias grátis para testar tudo",
                "Setup completo em 5 minutos",
                "Suporte especializado incluído",
                "Sem fidelidade ou taxas ocultas",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  {/* Certifique-se de que CheckCircle está importado */}
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-success flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full max-w-[calc(100%-1rem)] sm:max-w-xs md:max-w-md mx-auto lg:mx-0">
              {/* Certifique-se de que Button e ArrowRight estão importados */}
              <Button
                variant="hero"
                size="lg"
                className="w-full text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6"
              >
                Comece Grátis Agora
                <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border-2 bg-background/80 backdrop-blur-sm"
              >
                Falar com Consultor
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <Card className="shadow-glow border-0 bg-background/95 backdrop-blur-sm w-full max-w-[calc(100%-1rem)] sm:max-w-[95%] md:max-w-[98%] mx-auto lg:mx-0 p-2 sm:p-4 md:p-0">
            <CardContent className="p-4 md:p-8">
              <div className="text-center mb-3 md:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">
                  Receba uma demonstração personalizada
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Vamos mostrar como o BoraVender pode revolucionar seu negócio
                </p>
              </div>

              {/* Certifique-se de que handleSubmit, formData, handleChange, Label e Input estão definidos */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <div className="space-y-1">
                  <Label
                    htmlFor="name"
                    className="text-foreground font-medium text-sm"
                  >
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
                    className="h-9 sm:h-10 md:h-12 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="email"
                    className="text-foreground font-medium text-sm"
                  >
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
                    className="h-9 sm:h-10 md:h-12 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="phone"
                    className="text-foreground font-medium text-sm"
                  >
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
                    className="h-9 sm:h-10 md:h-12 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full text-xs sm:text-sm md:text-base lg:text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4"
                >
                  Quero Minha Demonstração Grátis
                  <ArrowRight className="w-3 h-3 ml-0.5 sm:ml-1 md:ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossos termos e política de
                  privacidade. Prometemos não enviar spam! 🤝
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
        {/* Bottom guarantee */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-success/10 text-success px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs font-semibold">
            🛡️ Garantia de satisfação de 30 dias ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </section>
  );
};
