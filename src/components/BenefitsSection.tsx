import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Receipt,
  Package,
  BarChart3,
  Globe,
  Zap,
  Monitor,
  Tag,
} from "lucide-react";

const benefits = [
  {
    icon: ShoppingCart,
    title: "Vendas Unificadas",
    description:
      "Controle suas vendas físicas e online em um só lugar. Tudo sincronizado automaticamente.",
    color: "text-primary",
  },
  {
    icon: Receipt,
    title: "Emissão Automática de Recibo",
    description:
      "Geramos um documento não fiscal de forma automática, ideal para comprovações de pagamento e controle interno.",
    color: "text-secondary",
  },
  {
    icon: Package,
    title: "Estoque Inteligente",
    description:
      "Controle unificado entre loja física e e-commerce. Nunca mais venda o que não tem.",
    color: "text-success",
  },
  {
    icon: BarChart3,
    title: "Relatórios em Tempo Real",
    description:
      "Acompanhe vendas, lucro e performance no painel em tempo real. Decisões baseadas em dados.",
    color: "text-primary",
  },

  {
    icon: Globe,
    title: "E-commerce Incluso",
    description:
      "Sua loja online já vem pronta. Apenas personalize e comece a vender na internet.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Setup Rápido",
    description:
      "Comece a vender em 5 minutos. Configuração simples e suporte completo.",
    color: "text-success",
  },
  {
    icon: Monitor,
    title: "PDV com Interface Intuitiva",
    description:
      "Sistema de ponto de venda simples e eficiente, pensado para agilizar o atendimento e facilitar o uso até por quem não tem experiência.",
    color: "text-primary",
  },
  {
    icon: Tag,
    title: "Impressão de Códigos de Barras",
    description:
      "Gere e imprima etiquetas com código de barras personalizados em poucos cliques, otimizando o controle de estoque e a organização dos seus produtos.",
    color: "text-primary",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo que você precisa para
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              vender mais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa que cresce junto com seu negócio. Simples de
            usar, poderosa nos resultados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-card to-muted/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br from-muted to-background shadow-lg group-hover:shadow-glow transition-all duration-300`}
                  >
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        {/*     <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Mais de <span className="font-bold text-primary">10.000 empreendedores</span> já confiam no BoraVender
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold">⭐⭐⭐⭐⭐</div>
            <span className="text-muted-foreground">4.9/5 - Avaliação dos usuários</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};
