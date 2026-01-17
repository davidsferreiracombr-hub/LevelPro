'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// This component will handle the carousel with indicators
function BoosterCarousel({
  profiles,
}: {
  profiles: Array<{ name: string; description: string; link: string }>;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full max-w-xs mx-auto"
      >
        <CarouselContent>
          {profiles.map((profile, profileIndex) => (
            <CarouselItem key={profileIndex}>
              <div className="flex flex-col items-center justify-between h-full space-y-2 py-1">
                <div className="text-center space-y-1 min-h-[12rem] flex flex-col justify-center">
                  <p className="font-bold text-sm text-foreground">
                    Contato {profileIndex + 1}
                  </p>
                  <p className="text-muted-foreground text-xs text-balance">
                    {profile.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-2 mt-2">
        {profiles.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              i === current
                ? 'w-4 bg-accent'
                : 'bg-muted hover:bg-muted-foreground/50'
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="space-y-2 mt-3">
        {profiles.map((profile, profileIndex) => (
          <Button
            key={profileIndex}
            asChild
            size="lg"
            className="w-full bg-black/50 text-foreground hover:bg-black/70 border border-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            <Link href={profile.link} target="_blank">
              Contato {profileIndex + 1}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
}

export default function ContactBoosterPage() {
  const contacts = [
    {
      title: 'Contato Geral',
      profiles: [
        {
          name: 'Booster Geral',
          imageUrl: 'https://i.imgur.com/p3IdzSN.png',
          link: 'https://chat.whatsapp.com/BlKFlq712KuKCreqnioSMf',
          description:
            'Aqui no contato Geral, você encontra pessoas que estão disponiveis para te atender a qualquer momento em qualquer jogo, basta clicar no botão e sera atendido sem complicação e de imediato pela equipe',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-y-auto relative md:overflow-hidden">
      <Image
        src="https://imgur.com/J4NRuCh"
        alt="Fundo abstrato"
        fill
        className="hidden md:block object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <Image
        src="https://imgur.com/Iyqjxgp"
        alt="Fundo abstrato mobile"
        fill
        className="md:hidden object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <div className="absolute inset-0 bg-background/80 z-10" />
      <div className="relative z-20 space-y-10 md:space-y-16 pt-24 md:pt-32 pb-12 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white uppercase">
            ENTRE EM CONTATO COM A NOSSA EQUIPE
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos especialistas e escolha o ideal para sua jornada.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex justify-center gap-6 md:gap-8">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-white w-full md:max-w-sm hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 flex flex-col text-center rounded-xl overflow-hidden group hover:-translate-y-2"
            >
              <CardHeader className="items-center p-6 pb-2">
                <div className={cn("flex mb-3 transition-transform duration-300 group-hover:scale-105 justify-center")}>
                    <Image
                      src={'https://i.imgur.com/p3IdzSN.png'}
                      alt={`Foto de perfil de ${contact.profiles[0].name}`}
                      width={80}
                      height={80}
                      className={cn(
                        'w-20 h-20 rounded-full border-2 border-black/50 bg-card object-center'
                      )}
                      data-ai-hint="profile picture"
                    />
                </div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between px-6 pb-6 pt-2">
                {contact.profiles.length > 1 ? (
                  <BoosterCarousel profiles={contact.profiles} />
                ) : (
                  <div className="flex flex-col items-center justify-between h-full space-y-2 py-1">
                    <div className="text-center space-y-1 min-h-[12rem] flex flex-col justify-center">
                      <p className="font-bold text-sm text-foreground">
                        {contact.profiles[0].name}
                      </p>
                      <p className="text-muted-foreground text-xs text-balance">
                        {contact.profiles[0].description}
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-black/50 text-foreground hover:bg-black/70 border border-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105"
                    >
                      <Link href={contact.profiles[0].link} target="_blank">
                        Entrar em Contato
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
