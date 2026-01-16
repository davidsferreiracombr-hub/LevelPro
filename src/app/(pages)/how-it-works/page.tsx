import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ShieldCheck, Gamepad, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Como Funciona | LevelPro Accelerator',
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Faça seu Pedido',
      description: 'Escolha o jogo, selecione o plano de boosting desejado e preencha as informações da sua conta com total segurança.',
    },
    {
      icon: ShieldCheck,
      title: 'Pagamento Seguro',
      description: 'Realize o pagamento através do nosso gateway seguro. Seus dados financeiros estão 100% protegidos.',
    },
    {
      icon: Gamepad,
      title: 'Nosso Pro Player Assume',
      description: 'Um de nossos jogadores profissionais e verificados inicia o serviço na sua conta, utilizando apenas habilidade e sem nenhum cheat.',
    },
    {
      icon: Rocket,
      title: 'Conta Turbinada',
      description: 'Você recebe sua conta de volta no nível combinado, pronta para dominar. Notificamos você assim que o serviço for concluído.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-accent">Simples, Rápido e Seguro</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Nosso processo é desenhado para ser transparente e eficiente. Veja como é fácil.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex md:items-center gap-8 mb-12 md:mb-20 flex-col md:flex-row">
            <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="border-accent text-accent text-2xl font-bold w-12 h-12 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <CardTitle className="text-2xl font-headline text-primary">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-shrink-0 md:order-2">
              <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                <step.icon className="w-8 h-8 text-accent" />
              </div>
            </div>
             <div className="flex-1 hidden md:block md:order-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
