import { ShoppingCart, ShieldCheck, Gamepad, Rocket, KeyRound, Camera, CircleDollarSign } from 'lucide-react';
import Image from 'next/image';

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
    <div className="relative overflow-hidden">
        <Image
            src="https://i.imgur.com/NtGDzvB.png"
            alt="Fundo abstrato"
            fill
            className="hidden md:block object-cover object-center z-0"
            data-ai-hint="abstract background"
        />
        <Image
            src="https://i.imgur.com/Bewcdqn.png"
            alt="Fundo abstrato mobile"
            fill
            className="md:hidden object-cover object-center z-0"
            data-ai-hint="abstract background"
        />
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="relative z-20 space-y-16 container mx-auto px-4 pt-24 pb-12">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">Simples, Rápido e Seguro</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Nosso processo é desenhado para ser transparente e eficiente. Veja como é fácil.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* The vertical timeline line */}
                <div className="absolute left-5 top-2 h-full w-0.5 -translate-x-1/2 bg-border/30"></div>

                <div className="space-y-12">
                {steps.map((step) => (
                    <div key={step.title} className="relative flex items-start">
                    {/* Dot on the timeline and Icon */}
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border-2 border-primary">
                        <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    {/* Card content */}
                    <div className="ml-6 flex-1">
                        <div className="p-6 bg-card/70 border border-border/30 rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                        <h3 className="text-xl font-headline text-primary-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm text-balance">{step.description}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
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
    </div>
  );
}
