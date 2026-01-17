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
              className="md:hidden object-contain object-bottom"
              data-ai-hint={heroCharacter.imageHint}
            />
          )}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-4 items-center max-w-3xl mx-auto">
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-balance text-white">
                Eleve seu Jogo
              </h1>
              <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-balance text-center">
                <span className="text-primary [text-shadow:0_0_15px_hsl(var(--primary))]">Suba de Nível</span> como um
                <span className="block font-extrabold text-5xl sm:text-6xl md:text-7xl text-accent [text-shadow:0_0_15px_hsl(var(--accent))]">Pro</span>
              </h2>
              <p className="max-w-lg text-sm md:text-base text-foreground/80 leading-relaxed text-balance">
                Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <Button asChild size="sm" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-shadow duration-300 shadow-[0_0_15px_hsl(var(--accent))]">
                  <Link href="/pricing">Começar agora</Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="w-full sm:w-auto bg-transparent border-primary text-primary hover:bg-primary/10 transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary))]">
                  <Link href="/games">Ver jogos</Link>
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
                      "bg-card/50 border border-white/10 text-left p-6 transition-colors duration-300 hover:border-accent/80 rounded-xl group md:backdrop-blur-sm",
                      item.text === 'Qualidade premium' && "border-accent shadow-lg shadow-accent/20"
                    )}
                  >
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold text-card-foreground">{item.text}</h3>
                            <p className="text-sm text-muted-foreground text-balance">{item.description}</p>
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
