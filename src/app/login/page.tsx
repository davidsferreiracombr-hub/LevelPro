import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
       <div className="absolute top-8 left-8">
        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
          <Link href="/">Voltar para o Início</Link>
        </Button>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <Link href="/" className="inline-block mx-auto">
            <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={180} height={45} className="object-contain" />
          </Link>
          <CardTitle className="text-3xl font-headline">Acesse sua Conta</CardTitle>
          <CardDescription>Bem-vindo de volta! Acompanhe seus pedidos.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
             <div className="flex items-center justify-end">
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent">
                Esqueceu sua senha?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Entrar
            </Button>
            <Button variant="outline" className="w-full">
              Entrar com Google
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <Link href="#" className="font-semibold text-accent hover:underline">
              Crie uma agora
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
