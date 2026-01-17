'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ContactBoosterPage() {
  const contacts = [
    {
      title: 'Free Fire & Clash Royale',
      description: 'Contato exclusivo para quem joga Free Fire ou Clash Royale.',
      link: 'https://wa.me/5511999998888',
    },
    {
      title: 'Drive Zone & Brawl Stars',
      description: 'Contato dedicado para jogadores de Drive Zone e Brawl Stars.',
      link: 'https://wa.me/5511999998888',
    },
    {
      title: 'Contato para jogo único',
      description: 'Escolha esse contato se você joga apenas um jogo específico.',
      link: 'https://wa.me/5511999998888',
    },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-white uppercase">
          Entre em Contato com seu Booster
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Escolha o contato de acordo com o jogo que você deseja upar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {contacts.map((contact, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Card
              className="relative bg-black/80 backdrop-blur-lg border border-white/10 rounded-3xl text-center overflow-hidden"
            >
              <CardContent className="p-8 flex flex-col items-center justify-center gap-6">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-purple-500/40 to-pink-500/40 rounded-full blur-lg"></div>
                  <div className="relative w-full h-full flex items-center justify-center bg-black/30 rounded-full border border-white/10">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-white text-balance">{contact.title}</h2>
                  <p className="text-muted-foreground text-sm text-balance">{contact.description}</p>
                </div>

                <Button asChild size="lg" className="bg-white text-black font-bold rounded-full shadow-lg shadow-white/20 transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:shadow-white/30 hover:scale-105 w-full">
                  <Link href={contact.link} target="_blank">
                    Começar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
