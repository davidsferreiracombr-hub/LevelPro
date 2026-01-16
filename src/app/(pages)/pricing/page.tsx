import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Preços | LevelPro Accelerator',
};

export default function PricingPage() {
  const tiers = [
    {
      name: 'Boost Rápido',
      price: 'R$ 49',
      description: 'Ideal para um empurrão inicial ou para superar um obstáculo.',
      features: ['+10 Níveis garantidos', 'Entrega em 48h', 'Suporte padrão'],
      isPopular: false,
    },
    {
      name: 'Pro Player',
      price: 'R$ 129',
      description: 'O pacote mais popular para um avanço significativo.',
      features: ['+30 Níveis garantidos', 'Entrega prioritária em 24h', 'Suporte VIP', 'Relatórios de progresso'],
      isPopular: true,
    },
    {
      name: 'Lenda',
      price: 'R$ 299',
      description: 'Para quem busca o topo e a maestria total no jogo.',
      features: ['+70 Níveis garantidos', 'Entrega expressa', 'Coaching de 1h com pro player', 'Acesso a guias exclusivos'],
      isPopular: false,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-accent">Nossos Planos</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Escolha o plano que melhor se adapta às suas ambições. Todos os planos são 100% seguros e confidenciais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col h-full ${tier.isPopular ? 'border-accent shadow-accent/20 shadow-lg' : 'border-border'}`}
          >
            <CardHeader>
              {tier.isPopular && (
                <div className="text-center">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <CardTitle className="text-3xl font-bold text-center pt-4">{tier.name}</CardTitle>
              <CardDescription className="text-center min-h-[40px]">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-center my-4">
                <span className="text-5xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground"> /pedido</span>
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className={`w-full text-lg py-6 ${tier.isPopular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                <Link href="/login">Pedir Agora</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
