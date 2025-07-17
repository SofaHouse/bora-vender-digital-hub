import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              BoraVender
            </h3>
            <p className="text-background/80 text-sm mb-4">
              A solução completa de PDV com e-commerce integrado para empreendedores que querem crescer.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center">
                📧
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center">
                📱
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center">
                💬
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">PDV Completo</a></li>
              <li><a href="#" className="hover:text-background transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Nota Fiscal</a></li>
              <li><a href="#" className="hover:text-background transition-colors">App Mobile</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Relatórios</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tutoriais</a></li>
              <li><a href="#" className="hover:text-background transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-background transition-colors">E-mail</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Chat Online</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Imprensa</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/60">
            © 2024 BoraVender. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};