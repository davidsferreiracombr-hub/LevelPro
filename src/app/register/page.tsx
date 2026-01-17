'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signUp } from '@/firebase/auth';
import { useFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { RegisterSchema } from '@/lib/auth-schemas';

type FormData = z.infer<typeof RegisterSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { auth, firestore } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    try {
      await signUp(auth, firestore, data);
      toast({
        title: 'Conta criada com sucesso!',
        description: 'Redirecionando para o seu painel.',
      });
      router.push('/dashboard');
    } catch (error: any) {
      let description = 'Ocorreu um erro desconhecido.';
      if (error.code === 'auth/email-already-in-use') {
        description = 'Este e-mail já está em uso.';
      }
      toast({
        variant: 'destructive',
        title: 'Erro no cadastro',
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
          <h1 className="text-3xl font-bold">Crie sua conta</h1>
          <p className="text-muted-foreground mt-2">Junte-se a nós e comece sua jornada para o pro.</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullname">Nome Completo</Label>
            <Input id="fullname" type="text" placeholder="Seu Nome Completo" required className="bg-card/50 border-border/50" {...form.register('fullname')} />
            {form.formState.errors.fullname && <p className="text-sm text-destructive">{form.formState.errors.fullname.message}</p>}
          </div>
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
          
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold" disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{' '}
          <Link href="/login" className="font-semibold text-accent hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
