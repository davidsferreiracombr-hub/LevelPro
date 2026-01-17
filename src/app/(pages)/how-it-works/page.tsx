import { Card, CardTitle } from '@/components/ui/card';
import { ShoppingCart, ShieldCheck, Gamepad, Rocket, KeyRound, Camera, CircleDollarSign } from 'lucide-react';

export const metadata = {
  title: 'Como Funciona | LevelPro Accelerator',
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: ShoppingCart,
      title: '1. Escolha o Contato',
      description: 'Você clica em Começar Agora, escolhe o contato de acordo com o jogo que deseja upar e fala diretamente com a pessoa responsável pelo seu atendimento.',
    },
    {
      icon: ShieldCheck,
      title: '2. Pagamento Inicial',
      description: 'Você realiza o pagamento da primeira parte do valor para iniciar o serviço. Esse pagamento serve como garantia para que o Pro Player comece o boosting.',
    },
    {
      icon: KeyRound,
      title: '3. Envio da Conta',
      description: 'Você envia sua conta para o Pro Player. Mesmo durante o serviço, a conta continua sendo 100% sua e você mantém acesso total.',
    },
    {
      icon: Gamepad,
      title: '4. Pro Player em Ação',
      description: 'Um jogador profissional e verificado começa o serviço manualmente, sem cheats ou qualquer prática que coloque sua conta em risco.',
    },
    {
      icon: Camera,
      title: '5. Comprovação do Serviço',
      description: 'Quando o boost é finalizado, enviamos prints e provas reais mostrando que a meta combinada foi atingida.',
    },
    {
      icon: CircleDollarSign,
      title: '6. Pagamento Final',
      description: 'Após ver a comprovação, você realiza o pagamento da segunda parte do valor.',
    },
    {
      icon: Rocket,
      title: '7. Conta Turbinada',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <Card key={step.title} className="bg-card/70 border border-border/30 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                  <step.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="space-y-2">
                  <CardTitle className="text-xl font-headline text-primary-foreground">{step.title}</CardTitle>
                  <p className="text-muted-foreground text-sm text-balance">{step.description}</p>
              </div>
          </Card>
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
