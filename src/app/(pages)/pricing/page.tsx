'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactBoosterPage() {
  const contacts = [
    {
      title: 'Nossa Equipe',
      profiles: [
        {
          name: 'Sobre Nós',
          imageUrl: 'https://i.imgur.com/36RI4H5.png',
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
        src="https://imgur.com/J4NRuCh.png"
        alt="Fundo abstrato"
        fill
        className="hidden md:block object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <Image
        src="https://imgur.com/Iyqjxgp.png"
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
              className="relative bg-zinc-900/95 border border-zinc-800 w-full md:max-w-sm transition-all duration-300 flex flex-col rounded-2xl overflow-hidden group hover:border-zinc-700 shadow-lg shadow-black/30"
            >
              <div className="absolute inset-0 bg-[url('https://i.imgur.com/eqAsbOD.png')] bg-cover bg-center opacity-[0.02] group-hover:opacity-[0.03] transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[.04] to-transparent pointer-events-none"></div>

              <div className="relative flex-grow flex flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-zinc-800/50 rounded-full p-1 border border-zinc-700 flex-shrink-0">
                    <Image
                      src={contact.profiles[0].imageUrl}
                      alt={`Foto de perfil de ${contact.profiles[0].name}`}
                      width={48}
                      height={48}
                      className='w-12 h-12 rounded-full object-cover'
                      data-ai-hint="profile picture"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">{contact.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{contact.profiles[0].name}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6 flex-grow">
                  {contact.profiles[0].description}
                </p>

                <div className="mt-8">
                  <h4 className="text-base font-semibold text-foreground">Entre em contato</h4>
                  <Button
                    asChild
                    size="lg"
                    className="w-full mt-3 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700 hover:border-zinc-600"
                  >
                    <Link href={contact.profiles[0].link} target="_blank">
                      <Mail className="mr-2 h-4 w-4" />
                      Entrar em contato
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
