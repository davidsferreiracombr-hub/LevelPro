import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contato | LevelPro Accelerator',
};

export default function ContactBoosterPage() {
  const contacts = [
    {
      title: 'Free Fire & Clash Royale',
      description: 'Contato exclusivo para quem joga Free Fire ou Clash Royale.',
      avatars: [
        'https://picsum.photos/seed/booster1/100/100',
        'https://picsum.photos/seed/booster2/100/100',
      ],
      avatarHint: 'pro gamer avatar',
      avatarLayout: 'side-by-side',
      borderColor: 'border-yellow-400/30',
      shadowColor: 'shadow-yellow-500/10',
      hoverBorderColor: 'hover:border-yellow-400/60',
      hoverShadowColor: 'hover:shadow-yellow-400/30',
      avatarRingColor: 'from-yellow-400 to-yellow-600',
      avatarShadow: 'shadow-yellow-500/30',
    },
    {
      title: 'Drive Zone & Brawl Stars',
      description: 'Contato dedicado para jogadores de Drive Zone e Brawl Stars.',
      avatars: ['https://picsum.photos/seed/booster3/100/100'],
      avatarHint: 'pro gamer avatar',
      avatarLayout: 'single',
      borderColor: 'border-yellow-400/30',
      shadowColor: 'shadow-yellow-500/10',
      hoverBorderColor: 'hover:border-yellow-400/60',
      hoverShadowColor: 'hover:shadow-yellow-400/30',
      avatarRingColor: 'from-yellow-400 to-yellow-600',
      avatarShadow: 'shadow-yellow-500/40',
    },
    {
      title: 'Contato para jogo único',
      description: 'Escolha esse contato se você joga apenas um jogo específico.',
      avatars: ['https://picsum.photos/seed/booster4/120/120'],
      avatarHint: 'pro gamer avatar',
      avatarLayout: 'single-large',
      borderColor: 'border-red-500/30',
      shadowColor: 'shadow-red-500/10',
      hoverBorderColor: 'hover:border-red-500/60',
      hoverShadowColor: 'hover:shadow-red-500/30',
      avatarRingColor: 'from-red-500 to-yellow-500',
      avatarShadow: 'shadow-red-500/50',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-white uppercase">
          ENTRE EM CONTATO COM SEU BOOSTER
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Escolha o contato de acordo com o jogo que você deseja upar.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {contacts.map((contact, index) => (
          <Card
            key={index}
            className={`bg-card border rounded-xl transition-all duration-300 hover:-translate-y-1 ${contact.borderColor} ${contact.shadowColor} ${contact.hoverBorderColor} ${contact.hoverShadowColor}`}
          >
            <CardHeader className="items-center text-center p-4">
              <div className="flex justify-center items-center h-28 mb-3">
                {contact.avatarLayout === 'side-by-side' && (
                  <div className="flex w-full justify-evenly items-center">
                    {contact.avatars.map((avatar, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className={`relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr shadow-md ${contact.avatarRingColor} ${contact.avatarShadow}`}>
                          <Image
                            src={avatar}
                            alt="Booster profile picture"
                            width={64}
                            height={64}
                            className="rounded-full object-cover border-2 border-background"
                            data-ai-hint={contact.avatarHint}
                          />
                        </div>
                        <span className="text-xs font-semibold text-white">Contato {i + 1}</span>
                      </div>
                    ))}
                  </div>
                )}
                 {contact.avatarLayout === 'single' && (
                   <div className={`relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr shadow-lg ${contact.avatarRingColor} ${contact.avatarShadow}`}>
                      <Image
                        src={contact.avatars[0]}
                        alt="Booster profile picture"
                        width={80}
                        height={80}
                        className="rounded-full object-cover border-2 border-background"
                        data-ai-hint={contact.avatarHint}
                      />
                   </div>
                )}
                {contact.avatarLayout === 'single-large' && (
                  <div className={`relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr shadow-lg ${contact.avatarRingColor} ${contact.avatarShadow}`}>
                    <Image
                      src={contact.avatars[0]}
                      alt="Booster profile picture"
                      width={96}
                      height={96}
                      className="rounded-full object-cover border-2 border-background"
                      data-ai-hint={contact.avatarHint}
                    />
                  </div>
                )}
              </div>
              <CardTitle className="text-xl font-bold font-headline text-white">{contact.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-balance text-sm pt-1">{contact.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              {contact.avatarLayout === 'side-by-side' ? (
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild className="w-full h-10 bg-accent text-accent-foreground font-bold text-xs transition-all duration-300 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_25px_hsl(var(--accent))] hover:scale-105">
                    <Link href="https://wa.me/5511999998888" target="_blank">Contato 1</Link>
                  </Button>
                  <Button asChild className="w-full h-10 bg-accent text-accent-foreground font-bold text-xs transition-all duration-300 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_25px_hsl(var(--accent))] hover:scale-105">
                    <Link href="https://wa.me/5511999998888" target="_blank">Contato 2</Link>
                  </Button>
                </div>
              ) : (
                <Button asChild className="w-full h-10 bg-accent text-accent-foreground font-bold text-sm transition-all duration-300 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_25px_hsl(var(--accent))] hover:scale-105">
                  <Link href="https://wa.me/5511999998888" target="_blank">Falar com o contato</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
