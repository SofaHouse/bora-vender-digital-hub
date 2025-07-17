import { Card } from "@/components/ui/card";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import mobileApp from "@/assets/mobile-app.jpg";

const screenshots = [
  {
    title: "Dashboard Principal",
    description: "Visão completa das suas vendas, estoque e performance em tempo real",
    image: heroDashboard,
    category: "Desktop"
  },
  {
    title: "App Mobile",
    description: "Gerencie seu negócio de qualquer lugar com nosso app completo",
    image: mobileApp,
    category: "Mobile"
  },
  {
    title: "Relatórios Avançados",
    description: "Análises detalhadas para tomar decisões estratégicas",
    image: heroDashboard,
    category: "Analytics"
  }
];

export const ScreenshotsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Interface pensada para
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> empreendedores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Design intuitivo e funcional. Acesse todas as funcionalidades 
            de forma simples e organize seu negócio como nunca.
          </p>
        </div>
        
        {/* Screenshots Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-primary transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {screenshot.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Feature highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Design Responsivo</h4>
            <p className="text-muted-foreground text-sm">
              Funciona perfeitamente em computador, tablet e celular
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Super Rápido</h4>
            <p className="text-muted-foreground text-sm">
              Interface otimizada para velocidade e produtividade
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-lg font-semibold text-foreground mb-2">100% Seguro</h4>
            <p className="text-muted-foreground text-sm">
              Seus dados protegidos com criptografia de nível bancário
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};