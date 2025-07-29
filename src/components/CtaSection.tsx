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
        <div className="grid grid-cols-1 w-[60%] gap-6 sm:gap-8 lg:gap-12 items-center mx-auto">
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
                "Venda rápida e sem complicações no balcão",
                "Controle de estoque simples e eficiente",
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
                asChild
              >
                <a
                  href="https://wa.me/5511991993229?text=Olá!%20Entrei%20em%20contato%20pelo%20site%20BoraVender%20e%20gostaria%20de%20falar%20com%20um%20consultor."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com Consultor
                  <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Form */}
        </div>
      </div>
    </section>
  );
};
