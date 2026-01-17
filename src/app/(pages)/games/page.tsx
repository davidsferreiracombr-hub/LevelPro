import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: 'Jogos | LevelPro Accelerator',
};

export default function GamesPage() {
  const games = [
    {
      name: 'Free Fire',
      imageUrl: 'https://picsum.photos/seed/freefire/400/225',
      imageHint: 'soldier battle',
      description: (
        <div className="space-y-3 text-left">
          <div>
            <h4 className="font-bold text-accent">Rank</h4>
            <p className="text-sm text-muted-foreground">É o tipo de up mais rápido. Em elos baixos o progresso acontece em poucas partidas, pois os pontos são ganhos facilmente. Exige menos tempo e menos esforço operacional.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Nível da conta</h4>
            <p className="text-sm text-muted-foreground">Depende de muitas horas de jogo acumuladas. Exige constância, repetição de partidas e dedicação contínua, tornando o processo mais trabalhoso.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Nível de personagem</h4>
            <p className="text-sm text-muted-foreground">É o mais demorado. A evolução é individual, exige uso frequente do personagem, experiência progressiva e planejamento. Por ser o serviço que mais consome tempo e esforço, é o que naturalmente exige um valor mais alto.</p>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-semibold text-foreground"><strong className="text-accent">Resumo:</strong> Quanto maior o tempo, a dificuldade e a dedicação exigida, maior é o valor do serviço.</p>
          </div>
        </div>
      )
    },
    {
      name: '⭐ Brawl Stars',
      imageUrl: 'https://picsum.photos/seed/brawlstars/400/225',
      imageHint: 'cartoon fight',
      description: (
        <div className="space-y-3 text-left">
          <div>
            <h4 className="font-bold text-accent">Rank</h4>
            <p className="text-sm text-muted-foreground">Exige habilidade, estratégia e constância. É mais demorado que os troféus, mas ainda possui progresso relativamente estável.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Troféus (nível)</h4>
            <p className="text-sm text-muted-foreground">São mais rápidos de upar, pois dependem de partidas normais e progresso direto.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Nível de personagem</h4>
            <p className="text-sm text-muted-foreground">É o mais difícil e demorado. Envolve evolução individual do brawler, recursos específicos e tempo prolongado de jogo. Por exigir mais esforço, tempo e controle de progressão, é o serviço que naturalmente possui o valor mais alto.</p>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-semibold text-foreground"><strong className="text-accent">Resumo:</strong> Serviços que exigem mais tempo, mais habilidade e mais dedicação sempre resultam em um valor maior, pois demandam mais esforço operacional e responsabilidade.</p>
          </div>
        </div>
      )
    },
    {
      name: '👑 Clash Royale',
      imageUrl: 'https://picsum.photos/seed/clashroyale/400/225',
      imageHint: 'castle fantasy',
      description: (
        <div className="space-y-3 text-left">
          <div>
            <h4 className="font-bold text-accent">Troféus</h4>
            <p className="text-sm text-muted-foreground">Subir troféus é rápido, pois depende diretamente de vitórias. Com boa performance, o progresso acontece em pouco tempo.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Cartas</h4>
            <p className="text-sm text-muted-foreground">O up de cartas também é ágil, desde que haja estratégia e organização dos recursos.</p>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-semibold text-foreground"><strong className="text-accent">Resumo:</strong> Como ambos têm progresso rápido e menos complexidade, exigem menos esforço e, consequentemente, um valor mais baixo e mais justo.</p>
          </div>
        </div>
      )
    },
    {
      name: '🚗 Drive Zone',
      imageUrl: 'https://picsum.photos/seed/drivezone/400/225',
      imageHint: 'racing car',
      description: (
        <div className="space-y-3 text-left">
          <div>
            <h4 className="font-bold text-accent">Up de carros</h4>
            <p className="text-sm text-muted-foreground">Envolve desbloqueio e evolução de veículos. Exige tempo de jogo, consistência e progresso contínuo.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Up de performance</h4>
            <p className="text-sm text-muted-foreground">Inclui melhorias mecânicas que impactam diretamente no desempenho. Exige planejamento, partidas frequentes e maior dedicação.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Up de personalização</h4>
            <p className="text-sm text-muted-foreground">Focado na parte estética. Normalmente exige menos esforço técnico.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Progresso geral</h4>
            <p className="text-sm text-muted-foreground">Relaciona-se ao avanço completo da conta, desbloqueio de conteúdos e evolução total no jogo. Por envolver várias etapas e exigir muitas horas de jogo, é um dos serviços que naturalmente demanda maior valor.</p>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-semibold text-foreground"><strong className="text-accent">Resumo:</strong> Quanto mais completo e trabalhoso o serviço, maior é o nível de dedicação exigido e maior é o valor aplicado.</p>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">Jogos Suportados</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Apoiamos uma vasta gama de jogos populares. Veja os detalhes de cada serviço.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Card key={game.name} className="bg-card/50 border border-transparent rounded-xl overflow-hidden group transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
            <CardContent className="p-0">
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
              <div className="p-5 space-y-3">
                <CardTitle className="text-lg font-bold font-headline">{game.name}</CardTitle>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="p-0 text-sm font-medium text-muted-foreground hover:text-accent hover:no-underline [&[data-state=open]]:text-accent">
                      Ver detalhes do serviço
                    </AccordionTrigger>
                    <AccordionContent>
                      {game.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
