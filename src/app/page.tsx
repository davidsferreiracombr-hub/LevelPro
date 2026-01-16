import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Flame, Zap, Lock, Rocket, Gamepad2, KeyRound, Star } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-character');

  const metrics = [
    { icon: Flame, text: '+1.000 contas upadas' },
    { icon: Zap, text: 'Entrega rápida' },
    { icon: Lock, text: '100% confidencial' },
  ];

  const infoBarItems = [
    { icon: Rocket, text: 'Boost rápido' },
    { icon: Gamepad2, text: 'Mobile games' },
    { icon: KeyRound, text: 'Seguro e discreto' },
    { icon: Star, text: 'Qualidade premium' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 text-white">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-balance">
                  Up Your Game
                </h1>
                <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-balance">
                  <span className="text-primary">Level</span> Like a <span className="text-accent">Pro</span>
                </h2>
                <p className="max-w-lg text-lg text-foreground leading-relaxed text-balance">
                  Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 pt-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm font-medium">
                      <metric.icon className="h-5 w-5 text-accent" />
                      <span>{metric.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full max-w-xs sm:max-w-none sm:w-auto">
                  <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent))]">
                    <Link href="/pricing">Começar agora</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Link href="/games">Ver jogos</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-auto md:w-full md:min-h-[600px] flex items-center justify-center">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={800}
                    priority
                    data-ai-hint={heroImage.imageHint}
                    className="object-contain object-bottom h-full w-auto drop-shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card/50 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {infoBarItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <item.icon className="h-8 w-8 text-accent" />
                  <span className="font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
