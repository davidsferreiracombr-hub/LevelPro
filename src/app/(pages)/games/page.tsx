import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Jogos | LevelPro Accelerator',
};

export default function GamesPage() {
  const games = [
    { name: 'Free Fire', imageUrl: 'https://picsum.photos/seed/freefire/400/300', imageHint: 'soldier battle' },
    { name: 'Brawl Stars', imageUrl: 'https://picsum.photos/seed/brawlstars/400/300', imageHint: 'cartoon fight' },
    { name: 'Clash Royale', imageUrl: 'https://picsum.photos/seed/clashroyale/400/300', imageHint: 'castle fantasy' },
    { name: 'Drive Zone', imageUrl: 'https://picsum.photos/seed/drivezone/400/300', imageHint: 'racing car' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-accent">Jogos Suportados</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Apoiamos uma vasta gama de jogos populares. Escolha o seu e comece a subir de nível.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
