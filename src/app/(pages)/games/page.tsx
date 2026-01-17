import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Jogos | LevelPro Accelerator',
};

export default function GamesPage() {
  const games = [
    {
      name: 'Free Fire',
      imageUrl: 'https://i.imgur.com/9WbMrpf.png',
      imageHint: 'soldier battle',
      summary: 'O valor varia com o tempo, dificuldade e dedicação exigida.',
      price: '20,00',
    },
    {
      name: '⭐ Brawl Stars',
      imageUrl: 'https://i.imgur.com/eqAsbOD.png',
      imageHint: 'cartoon fight',
      summary: 'Serviços que exigem mais tempo, habilidade e dedicação custam mais.',
      price: '15,00',
    },
    {
      name: '👑 Clash Royale',
      imageUrl: 'https://i.imgur.com/SjS2DnD.png',
      imageHint: 'castle fantasy',
      summary: 'Progresso rápido e menor complexidade resultam em um valor mais justo.',
      price: '15,00',
    },
    {
      name: '🚗 Drive Zone',
      imageUrl: 'https://i.imgur.com/sjmlTL6.png',
      imageHint: 'racing car',
      summary: 'Serviços mais completos e trabalhosos têm um valor maior.',
      price: '20,00',
    },
  ];

  return (
    <div className="relative overflow-hidden">
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
        <div className="relative z-20 space-y-12 container mx-auto px-4 pt-24 pb-12">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">Games Populares</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Apoiamos uma vasta gama de jogos populares. Veja os detalhes de cada serviço.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {games.map((game) => (
                <Card key={game.name} className="bg-card/50 border border-transparent rounded-xl overflow-hidden group transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 flex flex-col">
                    <CardContent className="p-0 flex flex-col flex-grow">
                        <div className="overflow-hidden rounded-t-xl">
                            <Image
                            src={game.imageUrl}
                            alt={`Capa do jogo ${game.name}`}
                            width={400}
                            height={225}
                            className="object-cover w-full aspect-video transition-transform duration-500 ease-in-out group-hover:scale-110"
                            data-ai-hint={game.imageHint}
                            />
                        </div>
                        <div className="p-4 space-y-3 flex flex-col flex-grow">
                            <CardTitle className="text-base font-bold font-headline">{game.name}</CardTitle>
                            <p className="text-xs text-muted-foreground flex-grow text-balance">{game.summary}</p>
                            <p className="text-sm font-bold text-foreground pt-2 mt-auto border-t border-border">A partir de <span className="text-accent">R$ {game.price}</span></p>
                        </div>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
