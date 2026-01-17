import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, Gamepad2, KeyRound, Star } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-character');

  const infoBarItems = [
    { 
      icon: Rocket, 
      text: 'Boost rápido',
      description: 'Nossos pro-players garantem uma subida de nível veloz e eficiente.' 
    },
    { 
      icon: Gamepad2, 
      text: 'Mobile games',
      description: 'Somos especialistas nos maiores jogos mobile do mercado.'
    },
    { 
      icon: KeyRound, 
      text: 'Seguro e discreto',
      description: 'Sua conta é tratada com total confidencialidade e segurança.'
    },
    { 
      icon: Star, 
      text: 'Qualidade premium',
      description: 'Serviço de alta performance para os jogadores mais exigentes.'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative overflow-hidden h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 hero-gradient" />
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-contain object-bottom"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 -mt-20">
            <div className="flex flex-col gap-4 md:gap-6 items-center max-w-4xl mx-auto">
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-balance [text-shadow:0_0_25px_hsl(var(--accent))]">
                Eleve seu Jogo
              </h1>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-balance">
                <span className="text-primary [text-shadow:0_0_15px_hsl(var(--primary))]">Suba de Nível</span> como um <span className="text-accent [text-shadow:0_0_15px_hsl(var(--accent))]">Pro</span>
              </h2>
              <p className="max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed text-balance">
                Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto">
                <Button asChild size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_hsl(var(--accent))]">
                  <Link href="/pricing">Começar agora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-8 py-6 bg-transparent border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300">
                  <Link href="/games">Ver jogos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
             <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-headline text-card-foreground">Por que nos escolher?</h2>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Garantimos uma experiência de alto nível do início ao fim.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {infoBarItems.map((item, index) => {
                const isPremium = item.text === 'Qualidade premium';
                return (
                  <Card
                    key={index}
                    className={cn(
                      'bg-card border border-white/10 text-left p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-2 group rounded-xl',
                      isPremium
                        ? 'hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg'
                        : 'hover:border-primary/50 hover:shadow-primary/10 hover:shadow-lg'
                    )}
                  >
                    <div
                      className={cn(
                        'w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
                        isPremium
                          ? 'bg-accent/10 text-accent'
                          : 'bg-primary/10 text-primary'
                      )}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold text-card-foreground">{item.text}</h3>
                        <p className="text-sm text-muted-foreground text-balance">{item.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
