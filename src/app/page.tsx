import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Rocket, Gamepad2, ShieldCheck, Trophy, Instagram, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
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
      description: 'Progresso rápido e eficiente para subir de nível sem esforço.',
    },
    {
      icon: Gamepad2,
      text: 'Especialistas em Jogos Mobile',
      description: 'Focados nos maiores jogos mobile do mercado.',
    },
    {
      icon: ShieldCheck,
      text: 'Seguro e Confidencial',
      description: 'Sua conta tratada com total segurança e sigilo.',
    },
    {
      icon: Trophy,
      text: 'Serviço de Excelência',
      description: 'Atendimento profissional e resultados garantidos.',
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
      title: 'Fale Conosco',
      profiles: [
        {
          name: 'Atendimento Geral',
          imageUrl: 'https://i.imgur.com/36RI4H5.png',
          link: 'https://chat.whatsapp.com/BlKFlq712KuKCreqnioSMf',
          description:
            'Nossa equipe está disponível para te atender em qualquer jogo. Clique no botão para um atendimento rápido e sem complicação.',
        },
      ],
    },
  ];
  
  const desktopContact = {
      name: 'EQUIPE LEVELPRO',
      title: 'Especialistas em boosting de jogos prontos para te atender.',
      bio: 'Nossa equipe de atendimento está disponível para tirar suas dúvidas e iniciar seu boost. Entre em contato para um atendimento rápido e personalizado.',
      imageUrl: 'https://i.imgur.com/36RI4H5.png',
      email: 'contato@levelpro.gg',
      phone: '+55 (11) 99999-8888',
      location: 'Atendimento 100% Online',
      link: 'https://chat.whatsapp.com/BlKFlq712KuKCreqnioSMf',
      tags: [
          { icon: Briefcase, text: 'Suporte Especializado' },
          { icon: Mail, text: 'Email' },
          { icon: Phone, text: 'Telefone' },
      ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src={
                PlaceHolderImages.find(img => img.id === 'hero-background')
                  ?.imageUrl || ''
              }
              alt="Fundo de jogo"
              fill
              priority
              className="object-cover object-center z-0 hidden md:block"
              data-ai-hint={
                PlaceHolderImages.find(
                  img => img.id === 'hero-background'
                )?.imageHint || 'game background'
              }
            />
            <Image
              src={
                PlaceHolderImages.find(img => img.id === 'hero-character')
                  ?.imageUrl || ''
              }
              alt="Fundo de jogo mobile"
              fill
              priority
              className="object-cover object-center z-0 md:hidden"
              data-ai-hint={
                PlaceHolderImages.find(
                  img => img.id === 'hero-character'
                )?.imageHint || 'game character'
              }
            />
          </div>
          <div className="absolute inset-0 bg-background/80 z-10" />

          <div className="relative z-20">
            <section className="relative overflow-hidden text-center text-white pt-32 md:pt-40 pb-12">
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

            <section id="nossos-servicos" className="relative pt-12 md:pt-16 pb-16 sm:pb-24">
              <div className="relative z-20 container mx-auto px-4">
                <div className="text-center mb-8">
                  <h2 className="text-xl md:text-3xl font-bold mb-2 text-foreground text-center uppercase pt-2">
                    NOSSOS SERVIÇOS
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                    Escolha o jogo que você quer subir de nível e fale com um de nossos especialistas.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-fit mx-auto">
                  {games.map((game, index) => (
                    <Link
                      href={game.href}
                      key={game.name}
                      className="group block w-32 md:w-36"
                    >
                      <div
                        className="overflow-hidden rounded-lg border-2 border-transparent group-hover:shadow-xl group-hover:border-accent animate-card-pulse"
                        style={{ animationDelay: `${index * 600}ms` }}
                      >
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
          <div className="absolute bottom-0 left-0 right-0 h-[650px] bg-gradient-to-t from-background via-background/90 to-transparent z-10" />
        </div>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
                Por que nos escolher?
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
                Garantimos uma experiência de alto nível do início ao fim.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {infoBarItems.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl p-px bg-gradient-to-b from-accent/20 to-transparent group"
                >
                  <div className="relative bg-card/60 backdrop-blur-sm rounded-[15px] h-full p-6 text-center flex flex-col items-center transition-all duration-300 group-hover:bg-card/80 group-hover:shadow-2xl group-hover:shadow-accent/10">
                    <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                      <svg
                        width="90"
                        height="90"
                        viewBox="0 0 100 95"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute text-accent opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                      >
                        <defs>
                          <radialGradient id={`glow-grad-${index}`} cx="50%" cy="50%" r="50%">
                            <stop stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                            <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <path
                          d="M50 0L95.2691 23.75V71.25L50 95L4.73091 71.25V23.75L50 0Z"
                          fill={`url(#glow-grad-${index})`}
                        />
                        <path
                          d="M4.73091 23.75L0.5 28.5V66.5L4.73091 71.25"
                          stroke="currentColor"
                          strokeOpacity="0.3"
                          strokeWidth="1"
                        />
                        <path
                          d="M95.2691 23.75L99.5 28.5V66.5L95.2691 71.25"
                          stroke="currentColor"
                          strokeOpacity="0.3"
                          strokeWidth="1"
                        />
                      </svg>
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 95"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path
                          d="M50 0L95.2691 23.75V71.25L50 95L4.73091 71.25V23.75L50 0Z"
                          stroke="currentColor"
                          strokeOpacity="0.8"
                          strokeWidth="1"
                        />
                      </svg>
                      <item.icon className="w-10 h-10 text-accent relative" />
                    </div>

                    <h3 className="text-xl font-headline text-white mb-2">{item.text}</h3>
                    <p className="text-muted-foreground text-sm text-balance">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white uppercase">
                ENTRE EM CONTATO COM A NOSSA EQUIPE
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
                Conheça nossos especialistas e escolha o ideal para sua jornada.
              </p>
            </div>

            <div className="max-w-5xl mx-auto flex justify-center gap-6 md:gap-8 md:hidden">
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
                          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"
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
                        className="w-full bg-white text-black hover:bg-white/90 transition-transform duration-300 hover:scale-105 animate-white-neon-pulse"
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

            <div className="hidden md:flex justify-center">
              <Card className="w-full max-w-3xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-8">
                      <div className="flex items-center gap-8">
                          <Image
                              src={desktopContact.imageUrl}
                              alt={`Foto de ${desktopContact.name}`}
                              width={160}
                              height={160}
                              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.7)]"
                              data-ai-hint="man portrait"
                          />
                          <div className="flex-grow">
                              <h3 className="text-3xl font-bold font-headline text-white">{desktopContact.name}</h3>
                              <p className="text-foreground/80 mt-1">{desktopContact.title}</p>
                              <p className="text-foreground/60 text-sm">{desktopContact.bio}</p>

                              <div className="space-y-3 mt-6">
                                  <a href={`mailto:${desktopContact.email}`} className="flex items-center gap-3 text-foreground/90 hover:text-white transition-colors">
                                      <Mail className="w-5 h-5 text-white" />
                                      <span>{desktopContact.email}</span>
                                  </a>
                                  <a href={`tel:${desktopContact.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-foreground/90 hover:text-white transition-colors">
                                      <Phone className="w-5 h-5 text-white" />
                                      <span>{desktopContact.phone}</span>
                                  </a>
                                  <div className="flex items-center gap-3 text-foreground/90">
                                      <MapPin className="w-5 h-5 text-white" />
                                      <span>{desktopContact.location}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <Button asChild size="lg" className="w-full mt-8 bg-white text-black hover:bg-white/90 font-bold text-base rounded-lg animate-white-neon-pulse">
                          <Link href={desktopContact.link} target="_blank">Entrar em Contato</Link>
                      </Button>
                  </div>
                  <CardFooter className="bg-black/20 px-8 py-4 border-t border-white/10 flex justify-center gap-8">
                      {desktopContact.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                              <tag.icon className="w-4 h-4" />
                              <span>{tag.text}</span>
                          </div>
                      ))}
                  </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
