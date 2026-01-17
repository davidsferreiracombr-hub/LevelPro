'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from '@/firebase/auth';
import { useFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { LoginSchema } from '@/lib/auth-schemas';

type FormData = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { auth } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(auth, data);
      toast({
        title: 'Login bem-sucedido!',
        description: 'Redirecionando para o seu painel.',
      });
      router.push('/dashboard');
    } catch (error: any) {
      console.error("Login Error:", error);
      let description = 'Ocorreu um erro desconhecido.';
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          description = 'E-mail ou senha inválidos. Por favor, tente novamente.';
          break;
        case 'auth/invalid-email':
          description = 'O formato do e-mail é inválido.';
          break;
        case 'auth/user-disabled':
          description = 'Esta conta de usuário foi desativada.';
          break;
        default:
          description = error.message || 'Não foi possível fazer login. Tente novamente.';
          break;
      }
      toast({
        variant: 'destructive',
        title: 'Erro no login',
        description,
      });
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 overflow-hidden">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10">
        <Button asChild variant="outline" className="border-accent/50 bg-card/50 text-accent hover:bg-accent/20">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
            Voltar
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-sm space-y-6 z-10 mt-16 sm:mt-0">
        <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={100} height={25} className="object-contain mx-auto" />

        <div className="text-center">
          <h1 className="text-3xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-muted-foreground mt-2">Faça login para subir de nível no seu jogo.</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Endereço de e-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required className="bg-card/50 border-border/50" {...form.register('email')} />
            {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                className="bg-card/50 border-border/50 pr-10"
                {...form.register('password')}
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
             {form.formState.errors.password && <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-muted-foreground data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
              <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">Lembrar de mim</Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-accent hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold" disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{' '}
          <Link href="/register" className="font-semibold text-accent hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
