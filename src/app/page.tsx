import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, Gamepad2, KeyRound, Star, Instagram } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { YoutubeIcon } from '@/components/icons/youtube';

export default function Home() {
  const heroCharacter = PlaceHolderImages.find((img) => img.id === 'hero-character');
  const heroBackground = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const infoBarItems = [
    { 
      icon: Rocket, 
      text: 'Boost Rápido',
      description: 'Nossa equipe experiente garante uma progressão rápida e eficiente.' 
    },
    { 
      icon: Gamepad2, 
      text: 'Jogos Mobile',
      description: 'Focados nos maiores jogos mobile do mercado, oferecemos um serviço especializado.'
    },
    { 
      icon: KeyRound, 
      text: 'Seguro e Discreto',
      description: 'Sua conta é tratada com máxima confidencialidade e segurança.'
    },
    { 
      icon: Star, 
      text: 'Qualidade Premium',
      description: 'Serviço de alta performance para jogadores que buscam excelência.'
    },
  ];

  const socialLinks = [
    { text: 'T', name: 'TikTok', href: 'https://tiktok.com/@levelpro_game', colorClass: 'hover:text-white', icon: null },
    { name: 'Instagram', href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', colorClass: 'hover:text-[#E1306C]', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com/@LEVELPRO_GAME', colorClass: 'hover:text-[#FF0000]', icon: YoutubeIcon },
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
              sizes="100vw"
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
              sizes="100vw"
              className="md:hidden object-cover object-center"
              data-ai-hint={heroCharacter.imageHint}
            />
          )}
          <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-background to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-4 items-center max-w-3xl mx-auto">
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-balance text-white animate-title-float select-none [will-change:transform]">
                Eleve seu Jogo
              </h1>
              <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-balance text-center animate-title-float [animation-delay:500ms] select-none [will-change:transform]">
                <span className="text-primary [text-shadow:0_0_15px_hsl(var(--primary))]">Suba de Nível</span> como um
                <span className="block font-extrabold text-5xl sm:text-6xl md:text-7xl text-accent [text-shadow:0_0_15px_hsl(var(--accent))]">Pro</span>
              </h2>
              <p className="max-w-lg text-sm md:text-base text-foreground/80 leading-relaxed text-balance">
                Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
              </p>
             
              <div className="flex flex-col items-center gap-4 pt-6">
                <div className="flex items-center gap-4 mb-2">
                  {socialLinks.map((link, index) => (
                      <a 
                          key={link.name} 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={link.name} 
                          style={{ animationDelay: `${index * 300}ms` }}
                          className={`p-2 rounded-full text-white/80 transition-all duration-300 hover:scale-125 animate-icon-glow ${link.colorClass}`}>
                          {link.icon ? <link.icon className="h-6 w-6" /> : <span className="font-bold text-lg w-6 h-6 flex items-center justify-center">{link.text}</span>}
                      </a>
                  ))}
                </div>
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
             <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline text-white">Por que nos escolher?</h2>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Garantimos uma experiência de alto nível do início ao fim.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {infoBarItems.map((item, index) => (
                <Card
                  key={index}
                  className="rounded-2xl bg-card border border-border/10 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                >
                    <div className="h-20 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="flex flex-col items-center px-4 pb-6 -mt-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-background border-4 border-background flex items-center justify-center text-primary mb-4 ring-1 ring-border/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary/50">
                            <item.icon className="h-10 w-10" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.text}</h3>
                        <p className="mt-1 text-sm text-muted-foreground text-balance">{item.description}</p>
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
