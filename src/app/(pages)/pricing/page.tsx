'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ContactBoosterPage() {
  const contacts = [
    {
      title: 'Free Fire & Clash Royale',
      description: 'Contato exclusivo para quem joga Free Fire ou Clash Royale.',
      profiles: [
        {
          name: 'Booster 1',
          imageUrl: 'https://picsum.photos/seed/booster1/100/100',
          link: 'https://wa.me/5511999998888',
        },
        {
          name: 'Booster 2',
          imageUrl: 'https://picsum.photos/seed/booster2/100/100',
          link: 'https://wa.me/5511999998888',
        },
      ],
    },
    {
      title: 'Drive Zone & Brawl Stars',
      description: 'Contato dedicado para jogadores de Drive Zone e Brawl Stars.',
      profiles: [
        {
          name: 'Booster 3',
          imageUrl: 'https://picsum.photos/seed/booster3/100/100',
          link: 'https://wa.me/5511999998888',
        },
        {
          name: 'Booster 4',
          imageUrl: 'https://picsum.photos/seed/booster4/100/100',
          link: 'https://wa.me/5511999998888',
        },
      ],
    },
    {
      title: 'Contato Geral',
      description: 'Para outros jogos ou se você joga vários da nossa lista.',
      profiles: [
        {
          name: 'General Booster',
          imageUrl: 'https://picsum.photos/seed/booster5/100/100',
          link: 'https://wa.me/5511999998888',
        },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-15rem)] flex items-center justify-center rounded-xl">
      <Image
        src="https://i.imgur.com/CE1pl3a.png"
        alt="Fundo abstrato"
        fill
        className="object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <div className="absolute inset-0 bg-background/70 z-10" />
      <div className="relative z-20 space-y-16 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white uppercase">
            Entre em Contato com seu Booster
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o contato de acordo com o jogo que você deseja upar.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {contacts.map((contact, index) => (
            <Card key={index} className="bg-card/70 border border-border/50 hover:border-accent hover:bg-card/90 transition-all duration-300 flex flex-col text-center backdrop-blur-sm">
              <CardHeader className="items-center">
                <div className="flex -space-x-4 mb-4">
                  {contact.profiles.map((profile) => (
                    <Image
                      key={profile.name}
                      src={profile.imageUrl}
                      alt={`Foto de perfil de ${profile.name}`}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full border-4 border-card bg-card"
                      data-ai-hint="profile picture"
                    />
                  ))}
                </div>
                <CardTitle className="text-xl text-primary-foreground">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm text-balance">{contact.description}</p>
              </CardContent>
              <div className="p-6 pt-0 space-y-3">
                {contact.profiles.length > 1 ? (
                  <>
                    <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={contact.profiles[0].link} target="_blank">
                        Contato 1
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="w-full">
                      <Link href={contact.profiles[1].link} target="_blank">
                        Contato 2
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={contact.profiles[0].link} target="_blank">
                      Começar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
