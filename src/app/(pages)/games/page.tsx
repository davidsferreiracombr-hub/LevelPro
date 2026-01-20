import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Jogos | LevelPro Accelerator',
};

const games = [
    { name: 'League of Legends', imageUrl: 'https://i.imgur.com/vBMSe75.jpg', href: '/pricing', imageHint: 'fantasy character' },
    { name: 'Call of Duty: Warzone', imageUrl: 'https://i.imgur.com/h9bxuFv.jpg', href: '/pricing', imageHint: 'soldier war' },
    { name: 'Genshin Impact', imageUrl: 'https://i.imgur.com/DTomfqo.jpg', href: '/pricing', imageHint: 'anime character' },
    { name: 'Free Fire', imageUrl: 'https://i.imgur.com/9bYYdKB.jpg', href: '/pricing', imageHint: 'action character shooting' },
];

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 sm:pt-32 pb-12">
      <h1 className="text-3xl font-bold mb-8 text-foreground text-center uppercase">Nossos Serviços</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-fit mx-auto">
        {games.map((game) => (
          <Link href={game.href} key={game.name} className="group block w-40 sm:w-36">
            <div className="overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent">
              <Image
                src={game.imageUrl}
                alt={game.name}
                width={150}
                height={200}
                className="w-full object-cover aspect-[3/4] rounded-lg"
                data-ai-hint={game.imageHint}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,0.7)] uppercase px-6 sm:px-8">
            <Link href="/pricing">
                Continuar
            </Link>
        </Button>
      </div>
    </div>
  );
}
