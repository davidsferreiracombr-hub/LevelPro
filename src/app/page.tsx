
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
      ],
      socials: [
        { name: 'TikTok', href: 'https://tiktok.com/@levelpro_game', icon: 'T' },
        { name: 'Instagram', href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', icon: Instagram },
        { name: 'YouTube', href: 'https://www.youtube.com/@LEVELPRO_GAME', icon: YoutubeIcon },
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

            <section id="nossos-servicos" className="relative pt-16 md:pt-24 pb-16 sm:pb-24">
              <div className="relative z-20 container mx-auto px-4">
                <div className="text-center mb-6">
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
                        className="overflow-hidden rounded-lg"
                      >
                        <Image
                          src={game.imageUrl}
                          alt={game.name}
                          width={150}
                          height={200}
                          className="w-full object-cover aspect-[3/4] rounded-lg transition-transform duration-300 group-hover:scale-105"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {infoBarItems.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl p-4 md:p-5 text-center flex flex-col items-center group transition-all duration-300 bg-zinc-950/80 border border-zinc-800 hover:border-accent/30"
                >
                  <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute w-full h-full text-accent/50 group-hover:text-accent transition-colors duration-300"
                    >
                      <path
                        d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                  </div>

                  <h3 className="text-base md:text-lg font-headline text-white mb-2">{item.text}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm text-balance">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative py-16 sm:py-24 bg-background overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
            <Image
              src="https://i.imgur.com/NtGDzvB.png"
              alt="Fundo Abstrato Contato"
              fill
              className="object-cover opacity-10"
              data-ai-hint="abstract background"
            />
          </div>
          <div className="container mx-auto px-4 space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white uppercase">
                ENTRE EM CONTATO COM A NOSSA EQUIPE
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
                Conheça nossos especialistas e escolha o ideal para sua jornada.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-sm md:max-w-4xl bg-gradient-to-br from-zinc-950/70 to-black/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
                <div className="absolute -top-1/2 -left-1/3 w-[600px] h-[600px] bg-primary/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                <div className="absolute -bottom-1/2 -right-1/3 w-[600px] h-[600px] bg-accent/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 animate-pulse [animation-delay:500ms]"></div>
                
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="flex-shrink-0">
                      <Image
                          src={desktopContact.imageUrl}
                          alt={`Foto de ${desktopContact.name}`}
                          width={200}
                          height={200}
                          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-black transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint="man portrait"
                      />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                      <h3 className="text-3xl font-bold font-headline text-white">{desktopContact.name}</h3>
                      <p className="text-foreground/80 mt-1">{desktopContact.title}</p>
                      <p className="text-foreground/60 text-sm mt-3">{desktopContact.bio}</p>

                      <div className="space-y-3 md:space-y-4 mt-6">
                          <a href={`mailto:${desktopContact.email}`} className="flex items-center justify-center md:justify-start gap-3 text-foreground/90 hover:text-white transition-colors">
                              <Mail className="w-5 h-5 text-accent" />
                              <span>{desktopContact.email}</span>
                              <ShieldCheck className="w-5 h-5 text-green-400" />
                          </a>
                          <a href={`tel:${desktopContact.phone.replace(/\\D/g, '')}`} className="flex items-center justify-center md:justify-start gap-3 text-foreground/90 hover:text-white transition-colors">
                              <Phone className="w-5 h-5 text-accent" />
                              <span>{desktopContact.phone}</span>
                              <ShieldCheck className="w-5 h-5 text-green-400" />
                          </a>
                          <div className="flex items-center justify-center md:justify-start gap-3 text-foreground/90">
                              <MapPin className="w-5 h-5 text-accent" />
                              <span>{desktopContact.location}</span>
                          </div>
                      </div>

                      <Button asChild size="lg" className="w-full mt-6 md:mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base rounded-lg transition-all duration-300 shadow-[0_0_20px_hsl(var(--accent)_/_0.7)] hover:shadow-[0_0_30px_hsl(var(--accent)_/_1)] group-hover:scale-105">
                          <Link href={desktopContact.link} target="_blank">Entrar em Contato via WhatsApp</Link>
                      </Button>
                  </div>
                </div>
                 <CardFooter className="bg-black/30 px-6 md:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                         {desktopContact.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-foreground/70">
                              <tag.icon className="w-4 h-4 text-accent" />
                              <span>{tag.text}</span>
                          </div>
                      ))}
                    </div>
                     <div className="flex items-center gap-4">
                           {desktopContact.socials.map((social) => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110">
                                    {typeof social.icon === 'string' ? (
                                        <span className="font-bold text-xl">{social.icon}</span>
                                    ) : (
                                        <social.icon className="h-5 w-5" />
                                    )}
                                </a>
                           ))}
                        </div>
                  </CardFooter>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
