import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, Gamepad2, KeyRound, Star } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

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
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <section className="relative overflow-hidden h-screen flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-6 items-center md:items-start max-w-2xl text-left">
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-balance">
                Up Your Game
              </h1>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-balance">
                <span className="text-primary">Level</span> Like a <span className="text-accent">Pro</span>
              </h2>
              <p className="max-w-lg text-lg text-foreground/80 leading-relaxed text-balance">
                Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
                <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent))]">
                  <Link href="/pricing">Começar agora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Link href="/games">Ver jogos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 sm:py-24">
          <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-accent">Por que nos escolher?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Garantimos uma experiência de alto nível do início ao fim.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {infoBarItems.map((item, index) => (
                 <Card key={index} className="bg-card/80 border-border/50 text-center p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/10 group">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-2 border-accent/50 group-hover:border-accent transition-colors">
                        <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{item.text}</h3>
                    <p className="text-sm text-muted-foreground min-h-[60px]">{item.description}</p>
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
