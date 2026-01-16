import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const orders = [
    {
      game: 'Genshin Impact',
      status: 'Em Progresso',
      progress: 65,
      level: '50 -> 80',
    },
    {
      game: 'Clash Royale',
      status: 'Concluído',
      progress: 100,
      level: 'King 12 -> 14',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Visão Geral</h1>
        <p className="text-muted-foreground">Bem-vindo de volta! Aqui está o status dos seus pedidos.</p>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Meus Pedidos</CardTitle>
            <CardDescription>Acompanhe o progresso do seu boost.</CardDescription>
          </div>
          <Button asChild>
            <Link href="/pricing">
                <PlusCircle className="mr-2 h-4 w-4" />
                Novo Pedido
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Jogo</TableHead>
                <TableHead>Níveis</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="w-[200px]">Progresso</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.game}>
                  <TableCell className="font-medium">{order.game}</TableCell>
                  <TableCell>{order.level}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'Concluído' ? 'default' : 'secondary'} className={order.status === 'Concluído' ? 'bg-accent text-accent-foreground' : 'bg-primary/20 text-primary'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={order.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">{order.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
       <Card className="bg-gradient-to-r from-accent/20 to-primary/20 border-accent/30">
        <CardHeader>
          <CardTitle className="text-accent">Recomendações com IA</CardTitle>
          <CardDescription>
            Receba estratégias de leveling personalizadas para otimizar sua progressão.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/dashboard/recommendations">
              Gerar Estratégia
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
