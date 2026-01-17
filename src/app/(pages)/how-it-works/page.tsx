import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ShieldCheck, Gamepad, Rocket, KeyRound, Camera, CircleDollarSign } from 'lucide-react';

export const metadata = {
  title: 'Como Funciona | LevelPro Accelerator',
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Escolha o Contato',
      description: 'Você clica em Começar Agora, escolhe o contato de acordo com o jogo que deseja upar e fala diretamente com a pessoa responsável pelo seu atendimento.',
    },
    {
      icon: ShieldCheck,
      title: 'Pagamento Inicial',
      description: 'Você realiza o pagamento da primeira parte do valor para iniciar o serviço. Esse pagamento serve como garantia para que o Pro Player comece o boosting.',
    },
    {
      icon: KeyRound,
      title: 'Envio da Conta (Totalmente Seguro)',
      description: 'Você envia sua conta para o Pro Player. Mesmo durante o serviço, a conta continua sendo 100% sua, você mantém acesso total e nós não alteramos nenhuma informação, senha ou dados pessoais.',
    },
    {
      icon: Gamepad,
      title: 'Pro Player Inicia o Boost',
      description: 'Um jogador profissional e verificado começa o serviço manualmente, sem cheats, sem programas ilegais e sem qualquer prática que coloque sua conta em risco.',
    },
    {
      icon: Camera,
      title: 'Comprovação do Serviço',
      description: 'Quando o boost é finalizado, enviamos prints e provas reais mostrando que o nível/meta combinada foi atingida.',
    },
    {
      icon: CircleDollarSign,
      title: 'Pagamento Final',
      description: 'Após ver a comprovação, você realiza o pagamento da segunda parte do valor.',
    },
    {
      icon: Rocket,
      title: 'Conta Devolvida Turbinada',
      description: 'Você recebe sua conta exatamente como era antes, sem alterações, apenas com o progresso feito.',
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
      <div className="text-center pt-8">
        <h3 className="text-3xl font-bold font-headline text-white">Tudo é feito de forma:</h3>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg">
            <span className="flex items-center gap-2 font-semibold text-foreground">🔒 100% segura</span>
            <span className="flex items-center gap-2 font-semibold text-foreground">🤝 100% confidencial</span>
            <span className="flex items-center gap-2 font-semibold text-foreground">🛡️ 100% discreta</span>
        </div>
      </div>
    </div>
  );
}
