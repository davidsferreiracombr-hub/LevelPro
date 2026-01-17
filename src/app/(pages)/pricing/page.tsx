'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export default function ContactBoosterPage() {
  const contacts = [
    {
      title: 'Free Fire & Clash Royale',
      profiles: [
        {
          name: 'Booster 1',
          imageUrl: 'https://picsum.photos/seed/booster1/100/100',
          link: 'https://wa.me/5511999998888',
          description:
            'Desde o beta, eu já sabia que Free Fire mudaria o cenário mobile. Me apaixonei pela jogabilidade rápida e estratégica, e nunca mais parei. Minha especialidade é a ranqueada.',
        },
        {
          name: 'Booster 2',
          imageUrl: 'https://picsum.photos/seed/booster2/100/100',
          link: 'https://wa.me/5511999998888',
          description:
            'Comecei no Clash Royale por diversão, mas a competição me fisgou. Hoje, cada partida é uma nova chance de superar meus limites e evoluir contas com agilidade.',
        },
      ],
    },
    {
      title: 'Drive Zone & Brawl Stars',
      profiles: [
        {
          name: 'Booster 3',
          imageUrl: 'https://picsum.photos/seed/booster3/100/100',
          link: 'https://wa.me/5511999998888',
          description:
            'A velocidade sempre foi minha paixão. No Drive Zone, transformo carros em verdadeiras máquinas de corrida, otimizando cada detalhe para garantir a vitória.',
        },
        {
          name: 'Booster 4',
          imageUrl: 'https://picsum.photos/seed/booster4/100/100',
          link: 'https://wa.me/5511999998888',
          description:
            'No Brawl Stars, a estratégia é tudo. Conheci o jogo no lançamento e desde então venho aprimorando táticas para subir troféus de forma rápida e consistente.',
        },
      ],
    },
    {
      title: 'Contato Geral',
      profiles: [
        {
          name: 'General Booster',
          imageUrl: 'https://picsum.photos/seed/booster5/100/100',
          link: 'https://wa.me/5511999998888',
          description:
            'Sou um apaixonado por games desde criança. Minha jornada me tornou um especialista em diversos jogos, sempre pronto para encarar novos desafios e garantir o melhor resultado para sua conta.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-auto md:overflow-hidden">
      <Image
        src="https://i.imgur.com/CE1pl3a.png"
        alt="Fundo abstrato"
        fill
        className="hidden md:block object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <Image
        src="https://i.imgur.com/FKfESU8.png"
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
            Escolha o contato de acordo com o jogo que você deseja upar.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col text-center rounded-xl overflow-hidden"
            >
              <CardHeader className="items-center p-4 pt-6 md:p-5">
                <div className="flex -space-x-4 mb-4">
                  {contact.profiles.map((profile) => (
                    <Image
                      key={profile.name}
                      src={profile.imageUrl}
                      alt={`Foto de perfil de ${profile.name}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-black/50 bg-card"
                      data-ai-hint="profile picture"
                    />
                  ))}
                </div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between px-4 md:px-5 pb-4 md:pb-5 pt-0 space-y-4">
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {contact.profiles.map((profile, profileIndex) => (
                      <CarouselItem key={profileIndex}>
                        <div className="p-1 h-32 flex items-center">
                          <p className="text-muted-foreground text-xs text-balance">
                            {profile.description}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {contact.profiles.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-6" />
                      <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 h-6 w-6" />
                    </>
                  )}
                </Carousel>

                <div className="space-y-2">
                  {contact.profiles.length > 1 ? (
                    <>
                      <Button
                        asChild
                        size="sm"
                        className="w-full text-xs h-8 bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Link href={contact.profiles[0].link} target="_blank">
                          Contato 1
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="w-full text-xs h-8"
                      >
                        <Link href={contact.profiles[1].link} target="_blank">
                          Contato 2
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <Button
                      asChild
                      size="sm"
                      className="w-full text-xs h-8 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Link href={contact.profiles[0].link} target="_blank">
                        Começar
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
