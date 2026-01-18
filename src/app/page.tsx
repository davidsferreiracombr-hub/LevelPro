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
  const heroCharacter = PlaceHolderImages.find((img) => img.id === 'hero-character');
  const heroBackground = PlaceHolderImages.find((img) => img.id === 'hero-background');

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
        <section className="relative overflow-hidden h-screen flex items-center justify-center text-center text-white pt-24">
          <div className="absolute inset-0 hero-gradient" />
           {heroBackground && (
            <Image
              src={heroBackground.imageUrl}
              alt={heroBackground.description}
              fill
              priority
              className="hidden md:block object-cover object-center"
              data-ai-hint={heroBackground.imageHint}
            />
          )}
          {heroCharacter && (
            <Image
              src={heroCharacter.imageUrl}
              alt={heroCharacter.description}
              fill
              priority
              className="md:hidden object-cover object-center"
              data-ai-hint={heroCharacter.imageHint}
            />
          )}
          <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-background to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-4 items-center max-w-3xl mx-auto">
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-balance text-white animate-title-float">
                Eleve seu Jogo
              </h1>
              <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-balance text-center animate-title-float [animation-delay:500ms]">
                <span className="text-primary [text-shadow:0_0_15px_hsl(var(--primary))]">Suba de Nível</span> como um
                <span className="block font-extrabold text-5xl sm:text-6xl md:text-7xl text-accent [text-shadow:0_0_15px_hsl(var(--accent))]">Pro</span>
              </h2>
              <p className="max-w-lg text-sm md:text-base text-foreground/80 leading-relaxed text-balance">
                Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
              </p>
             
              <div className="flex flex-col items-center gap-4 pt-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 animate-pulse-strong">
                  <Link href="/games">Começar agora</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent border-foreground/30 text-foreground/80 hover:bg-foreground/10 hover:text-foreground">
                  <Link href="/how-it-works">Como funciona</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
             <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-headline text-white">Por que nos escolher?</h2>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Garantimos uma experiência de alto nível do início ao fim.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {infoBarItems.map((item, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "text-left p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
                      index === infoBarItems.length - 1
                        ? "bg-accent text-accent-foreground shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_25px_hsl(var(--accent))]"
                        : "bg-card text-foreground border border-border hover:border-accent hover:shadow-accent/10"
                    )}
                  >
                    <div className="space-y-4">
                        <div className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20",
                           index === infoBarItems.length - 1
                            ? ""
                            : "text-accent"
                        )}>
                            <item.icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold">{item.text}</h3>
                            <p className="text-sm opacity-80 text-balance">{item.description}</p>
                        </div>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
