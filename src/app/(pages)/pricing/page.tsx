'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Gamepad2, Star, Users, ArrowRight } from 'lucide-react';

export default function ContactBoosterPage() {
  const contacts = [
    {
      icon: Gamepad2,
      title: 'Free Fire & Clash Royale',
      description: 'Contato exclusivo para quem joga Free Fire ou Clash Royale.',
      link: 'https://wa.me/5511999998888',
    },
    {
      icon: Star,
      title: 'Drive Zone & Brawl Stars',
      description: 'Contato dedicado para jogadores de Drive Zone e Brawl Stars.',
      link: 'https://wa.me/5511999998888',
    },
    {
      icon: Users,
      title: 'Contato Geral',
      description: 'Para outros jogos ou se você joga vários da nossa lista.',
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

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <Card key={index} className="bg-card/70 border border-border/50 hover:border-accent hover:bg-card transition-all duration-300 flex flex-col text-center">
            <CardHeader className="items-center">
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                <contact.icon className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl text-primary-foreground">{contact.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm text-balance">{contact.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={contact.link} target="_blank">
                  Começar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
