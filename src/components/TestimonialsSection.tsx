import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialStore from "@/assets/testimonial-store.jpg";

const testimonials = [
  {
    name: "Marina Santos",
    business: "Loja da Marina - Roupas Femininas",
    image: testimonialStore,
    rating: 5,
    testimonial: "O BoraVender revolucionou minha loja! Antes eu perdia vendas porque não conseguia controlar o estoque entre a loja física e o site. Agora tudo é automático e já aumentei 85% nas vendas online.",
    highlight: "85% de aumento nas vendas"
  },
  {
    name: "Carlos Oliveira",
    business: "TechParts - Peças de Computador",
    image: testimonialStore,
    rating: 5,
    testimonial: "A emissão automática de nota fiscal me economiza 3 horas por dia! E o app mobile me permite acompanhar as vendas mesmo quando estou viajando. Recomendo para qualquer empreendedor.",
    highlight: "3 horas economizadas por dia"
  },
  {
    name: "Ana Costa",
    business: "Doces da Ana - Confeitaria",
    image: testimonialStore,
    rating: 5,
    testimonial: "Super fácil de usar! Em 2 dias já estava vendendo online. O suporte é incrível e os relatórios me ajudam a entender quais produtos vendem mais. Meu faturamento dobrou em 6 meses!",
    highlight: "Faturamento dobrou em 6 meses"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem usa
            <span className="bg-gradient-primary bg-clip-text text-transparent"> recomenda</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de empreendedores que transformaram seus negócios 
            com o BoraVender. Você pode ser o próximo!
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-secondary transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-card to-background"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>
                
                {/* Highlight */}
                <div className="bg-gradient-secondary bg-clip-text text-transparent font-semibold text-sm mb-6">
                  ✨ {testimonial.highlight}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10.000+</div>
            <div className="text-muted-foreground">Empreendedores ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">127%</div>
            <div className="text-muted-foreground">Aumento médio em vendas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-muted-foreground">Avaliação dos usuários</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};