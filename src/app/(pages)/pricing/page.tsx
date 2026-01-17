'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
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
        src="https://i.imgur.com/J4NRuCh.png"
        alt="Fundo abstrato"
        fill
        className="hidden md:block object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <Image
        src="https://i.imgur.com/Iyqjxgp.png"
        alt="Fundo abstrato mobile"
        fill
        className="md:hidden object-cover object-center z-0"
        data-ai-hint="abstract background"
      />
      <div className="absolute inset-0 bg-background/80 z-10" />
      <div className="relative z-20 space-y-10 md:space-y-16 pt-24 sm:pt-28 md:pt-32 pb-12 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-headline text-white uppercase">
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
              className="bg-card/70 backdrop-blur-md border border-zinc-800 w-11/12 sm:w-full max-w-sm text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2 flex flex-col items-center"
            >
              <div className="relative mb-6">
                  <Image
                      src={contact.profiles[0].imageUrl}
                      alt={`Foto de perfil de ${contact.profiles[0].name}`}
                      width={112}
                      height={112}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white/50"
                      data-ai-hint="profile picture"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50"></div>
              </div>
              
              <CardTitle className="text-3xl font-bold font-headline text-white">{contact.title}</CardTitle>
              <p className="text-lg text-white font-semibold mb-4">{contact.profiles[0].name}</p>
              
              <CardContent className="p-0 flex-grow mb-8">
                  <p className="text-sm text-muted-foreground text-balance">
                      {contact.profiles[0].description}
                  </p>
              </CardContent>

              <CardFooter className="p-0 w-full mt-auto">
                <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,0.7)]"
                >
                    <Link href={contact.profiles[0].link} target="_blank">
                        <Mail className="mr-2 h-4 w-4" />
                        Entrar em contato
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
