import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Rocket, Gamepad2, KeyRound, Star, Instagram, Mail } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { YoutubeIcon } from '@/components/icons/youtube';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const infoBarItems = [
    { 
      icon: Rocket, 
      text: 'Boost Rápido',
      description: 'Nossa equipe experiente garante uma progressão rápida e eficiente.' 
    },
    { 
      icon: Gamepad2, 
      text: 'Jogos Mobile',
      description: 'Focados nos maiores jogos mobile do mercado, oferecemos um serviço especializado.'
    },
    { 
      icon: KeyRound, 
      text: 'Seguro e Discreto',
      description: 'Sua conta é tratada com máxima confidencialidade e segurança.'
    },
    { 
      icon: Star, 
      text: 'Qualidade Premium',
      description: 'Serviço de alta performance para jogadores que buscam excelência.'
    },
  ];

  const socialLinks = [
    { text: 'T', name: 'TikTok', href: 'https://tiktok.com/@levelpro_game', colorClass: 'hover:text-white', icon: null },
    { name: 'Instagram', href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', colorClass: 'hover:text-[#E1306C]', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com/@LEVELPRO_GAME', colorClass: 'hover:text-[#FF0000]', icon: YoutubeIcon },
  ];

  const games = [
    { name: 'League of Legends', imageUrl: 'https://i.imgur.com/vBMSe75.jpg', href: '/#contato', imageHint: 'fantasy character' },
    { name: 'Call of Duty: Warzone', imageUrl: 'https://i.imgur.com/h9bxuFv.jpg', href: '/#contato', imageHint: 'soldier war' },
    { name: 'Genshin Impact', imageUrl: 'https://i.imgur.com/DTomfqo.jpg', href: '/#contato', imageHint: 'anime character' },
    { name: 'Free Fire', imageUrl: 'https://i.imgur.com/9bYYdKB.jpg', href: '/#contato', imageHint: 'action character shooting' },
  ];

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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src={
                PlaceHolderImages.find(img => img.id === 'hero-background-hd')
                  ?.imageUrl || ''
              }
              alt="Fundo de jogo"
              fill
              priority
              className="object-cover object-center z-0 hidden md:block"
              data-ai-hint={
                PlaceHolderImages.find(
                  img => img.id === 'hero-background-hd'
                )?.imageHint || 'game background'
              }
            />
            <Image
              src={
                PlaceHolderImages.find(img => img.id === 'hero-character-hd')
                  ?.imageUrl || ''
              }
              alt="Fundo de jogo mobile"
              fill
              priority
              className="object-cover object-center z-0 md:hidden"
              data-ai-hint={
                PlaceHolderImages.find(
                  img => img.id === 'hero-character-hd'
                )?.imageHint || 'game character'
              }
            />
          </div>
          <div className="absolute inset-0 bg-background/80 z-10" />

          <div className="relative z-20">
            <section className="relative overflow-hidden h-screen flex items-center justify-center text-center text-white pt-24">
              <div className="absolute inset-0 hero-gradient" />
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col gap-4 items-center max-w-3xl mx-auto">
                  <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-balance text-white animate-title-float select-none [will-change:transform]">
                    Eleve seu Jogo
                  </h1>
                  <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-balance text-center animate-title-float [animation-delay:500ms] select-none [will-change:transform]">
                    <span className="text-primary [text-shadow:0_0_15px_hsl(var(--primary))]">Suba de Nível</span> como um
                    <span className="block font-extrabold text-5xl sm:text-6xl md:text-7xl text-accent [text-shadow:0_0_15px_hsl(var(--accent))]">Pro</span>
                  </h2>
                  <p className="max-w-lg text-sm md:text-base text-foreground/80 leading-relaxed text-balance">
                    Serviço profissional para upar contas de jogos mobile com rapidez, segurança e total sigilo.
                  </p>
                
                  <div className="flex flex-col items-center gap-4 pt-6">
                    <div className="flex items-center gap-4 mb-2">
                      {socialLinks.map((link, index) => (
                          <a 
                              key={link.name} 
                              href={link.href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              aria-label={link.name} 
                              style={{ animationDelay: `${index * 300}ms` }}
                              className={`p-2 rounded-full text-white/80 transition-all duration-300 hover:scale-125 animate-icon-glow ${link.colorClass}`}>
                              {link.icon ? <link.icon className="h-6 w-6" /> : <span className="font-bold text-lg w-6 h-6 flex items-center justify-center">{link.text}</span>}
                          </a>
                      ))}
                    </div>
                    <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 animate-pulse-strong">
                      <Link href="/#nossos-servicos">Começar agora</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent border-foreground/30 text-foreground/80 hover:bg-foreground/10 hover:text-foreground">
                      <Link href="/how-it-works">Como funciona</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="nossos-servicos" className="relative pb-24 sm:pb-32 pt-10 sm:pt-0">
              <div className="relative z-20 container mx-auto px-4">
                <div className="text-center">
                  <h2 className="text-xl md:text-3xl font-bold mb-2 text-foreground text-center uppercase md:pt-0 pt-2 -mt-16 md:mt-0">
                    NOSSOS SERVIÇOS
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                    Escolha o jogo que você quer subir de nível e fale com um de nossos especialistas.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-fit mx-auto mt-16 md:mt-16">
                  {games.map((game, index) => (
                    <Link
                      href={game.href}
                      key={game.name}
                      className="group block w-32 md:w-36 animate-card-pulse"
                      style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <div className="overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-accent">
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
              </div>
            </section>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[450px] bg-gradient-to-t from-background via-background/95 to-transparent z-10" />
        </div>

        <section id="contato" className="relative py-10 sm:py-16 bg-background">
          <div className="container mx-auto px-4 space-y-10 md:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-white uppercase">
                ENTRE EM CONTATO COM A NOSSA EQUIPE
              </h2>
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
        </section>

        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
             <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline text-white">Por que nos escolher?</h2>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Garantimos uma experiência de alto nível do início ao fim.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {infoBarItems.map((item, index) => (
                <Card
                  key={index}
                  className="rounded-2xl bg-card border border-border/10 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                >
                    <div className="h-20 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="flex flex-col items-center px-4 pb-6 -mt-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-background border-4 border-background flex items-center justify-center text-primary mb-4 ring-1 ring-border/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary/50">
                            <item.icon className="h-10 w-10" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.text}</h3>
                        <p className="mt-1 text-sm text-muted-foreground text-balance">{item.description}</p>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
