import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Jogos | LevelPro Accelerator',
};

export default function GamesPage() {
  const games = [
    { name: 'Arena of Valor', imageUrl: 'https://picsum.photos/seed/aov/400/300', imageHint: 'fantasy battle' },
    { name: 'Genshin Impact', imageUrl: 'https://picsum.photos/seed/genshin/400/300', imageHint: 'anime adventure' },
    { name: 'Clash Royale', imageUrl: 'https://picsum.photos/seed/clash/400/300', imageHint: 'castle fantasy' },
    { name: 'Brawl Stars', imageUrl: 'https://picsum.photos/seed/brawl/400/300', imageHint: 'cartoon fight' },
    { name: 'PUBG Mobile', imageUrl: 'https://picsum.photos/seed/pubg/400/300', imageHint: 'soldier battleground' },
    { name: 'League of Legends: Wild Rift', imageUrl: 'https://picsum.photos/seed/wildrift/400/300', imageHint: 'fantasy moba' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-accent">Jogos Suportados</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Apoiamos uma vasta gama de jogos populares. Escolha o seu e comece a subir de nível.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.name} className="overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 group">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={game.imageUrl}
                  alt={`Capa do jogo ${game.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={game.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-bold font-headline">{game.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
