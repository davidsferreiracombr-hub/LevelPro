import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Jogos | LevelPro Accelerator',
};

const games = [
    { name: 'League of Legends', imageUrl: 'https://i.imgur.com/sGXIn2R.jpg', href: '/pricing', imageHint: 'fantasy character' },
    { name: 'Call of Duty: Warzone', imageUrl: 'https://i.imgur.com/7iV4o2j.jpg', href: '/pricing', imageHint: 'soldier war' },
    { name: 'Genshin Impact', imageUrl: 'https://i.imgur.com/YVb4jPo.jpg', href: '/pricing', imageHint: 'anime character' },
    { name: 'Free Fire', imageUrl: 'https://i.imgur.com/bE3B3yq.jpg', href: '/pricing', imageHint: 'action character shooting' },
];

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Categorias Populares</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        {games.map((game) => (
          <Link href={game.href} key={game.name} className="group block">
            <div className="overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent">
              <Image
                src={game.imageUrl}
                alt={game.name}
                width={200}
                height={280}
                className="w-full object-cover aspect-[5/7] rounded-md"
                data-ai-hint={game.imageHint}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="link" className="text-muted-foreground hover:text-accent font-semibold uppercase tracking-wider text-sm">
            <Link href="/pricing">
                Ver todas as categorias
            </Link>
        </Button>
      </div>
    </div>
  );
}
