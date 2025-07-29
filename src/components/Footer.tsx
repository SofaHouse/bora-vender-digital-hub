import { Separator } from "@/components/ui/separator";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
              A solução completa de PDV com e-commerce integrado para
              empreendedores que querem crescer.
            </p>
          </div>

          {/* Product */}

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a
                  href="https://wa.me/5511991993229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <FaWhatsapp size={16} className="text-green-500" />
                  WhatsApp (11) 99199-3229
                </a>
              </li>
              <li>
                <a
                  href="mailto:boravendersofa@gmail.com"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <MdEmail size={16} className="text-blue-600" />
                  boravendersofa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/60">
            © 2024 BoraVender. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
