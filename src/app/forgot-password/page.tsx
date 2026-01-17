'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFirebase } from '@/firebase';
import { resetPassword } from '@/firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { ForgotPasswordSchema } from '@/lib/auth-schemas';

type FormData = z.infer<typeof ForgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { auth } = useFirebase();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    try {
      await resetPassword(auth, data.email);
      toast({
        title: 'E-mail de redefinição enviado',
        description: 'Verifique sua caixa de entrada para redefinir sua senha.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar e-mail',
        description: error.message,
      });
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 overflow-hidden">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10">
        <Button asChild variant="outline" className="border-accent/50 bg-card/50 text-accent hover:bg-accent/20">
          <Link href="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
            Voltar
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-sm space-y-6 z-10 mt-16 sm:mt-0">
        <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={100} height={25} className="object-contain mx-auto" />

        <div className="text-center">
          <h1 className="text-3xl font-bold">Esqueceu a senha?</h1>
          <p className="text-muted-foreground mt-2">Digite seu e-mail e enviaremos um link para redefinir sua senha.</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Endereço de e-mail</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="seu@email.com" 
              required 
              className="bg-card/50 border-border/50" 
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Link'}
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
