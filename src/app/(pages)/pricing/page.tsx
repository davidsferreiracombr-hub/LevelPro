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
            className="w-full bg-black/50 text-foreground hover:bg-black/70 border border-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300"
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
      title: 'Free Fire & Clash Royale',
      profiles: [
        {
          name: 'Booster 1',
          imageUrl: 'https://i.imgur.com/EQ9My4G.png',
          link: 'https://wa.me/5512981034356?text=Vim%20da%20LevelPro',
          description:
            'Minha jornada no Free Fire começou no dia do lançamento. A adrenalina do battle royale e a necessidade de estratégia rápida me cativaram. Acumulei milhares de horas de jogo, me especializei em subida de patente e hoje ajudo outros jogadores a alcançarem o tão sonhado Mestre.',
        },
        {
          name: 'Booster 2',
          imageUrl: 'https://picsum.photos/seed/booster2/100/100',
          link: 'https://wa.me/5512992295142?text=Vim%20da%20LevelPro',
          description:
            'O Clash Royale me fisgou pela complexidade em partidas curtas e intensas. O que começou como hobby virou paixão por montar decks perfeitos e prever cada movimento do adversário. Hoje, meu foco é acelerar a evolução de contas e levar meus clientes às Ligas mais altas.',
        },
      ],
    },
    {
      title: 'Drive Zone & Brawl Stars',
      profiles: [
        {
          name: 'Booster 3',
          imageUrl: 'https://picsum.photos/seed/booster3/100/100',
          link: 'https://wa.me/5512997133906?text=Vim%20da%20LevelPro',
          description:
            'A paixão por carros me levou ao Drive Zone. Fiquei obcecado em tunar cada veículo, extraindo o máximo de performance para dominar as corridas online. Conheço cada atalho e cada ponto de frenagem para transformar carros em lendas do asfalto.',
        },
        {
          name: 'Booster 4',
          imageUrl: 'https://i.imgur.com/EA1lJdK.png',
          link: 'https://wa.me/5512991082853?text=Vim%20da%20LevelPro',
          description:
            'Me chamo David, Conheci o Braw através de um amigo meu que jogava na sala de aula, gostei do jogo e procurei aprender mais, gostei bastante de conhecer o lipe e o Vtzinn na epóca, conheci métodos e consegui me aprimorar no jogo chegando a 90K de troféus em 2 anos, e hoje estou a serviço da LevelPro',
        },
      ],
    },
    {
      title: 'Contato Geral',
      profiles: [
        {
          name: 'Booster Geral',
          imageUrl: 'https://i.imgur.com/p3IdzSN.png',
          link: 'https://chat.whatsapp.com/BlKFlq712KuKCreqnioSMf',
          description:
            'Minha vida sempre girou em torno de games. De consoles antigos aos mais novos jogos mobile, minha curiosidade me fez dominar dezenas de títulos. Essa versatilidade me permite oferecer um serviço de boosting de alta qualidade em vários jogos, com foco em segurança e no resultado.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-y-auto relative md:overflow-hidden">
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
      <div className="relative z-20 space-y-10 md:space-y-16 pt-24 md:pt-32 pb-12 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white uppercase">
            Entre em Contato com seu Booster
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos especialistas e escolha o ideal para sua jornada.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 flex flex-col text-center rounded-xl overflow-hidden"
            >
              <CardHeader className="items-center p-6 pb-2">
                <div className={cn("flex mb-3", contact.profiles.length > 1 ? "-space-x-4" : "justify-center")}>
                  {contact.profiles.map((profile) => (
                    <Image
                      key={profile.name}
                      src={profile.imageUrl}
                      alt={`Foto de perfil de ${profile.name}`}
                      width={80}
                      height={80}
                      className={cn(
                        'w-20 h-20 rounded-full border-2 border-black/50 bg-card object-cover',
                        profile.name === 'Booster 1' && 'object-[0_20%]',
                        profile.name === 'Booster Geral' && 'object-center'
                      )}
                      data-ai-hint="profile picture"
                    />
                  ))}
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
                      className="w-full bg-black/50 text-foreground hover:bg-black/70 border border-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300"
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
