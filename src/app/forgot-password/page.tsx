'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
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
          <h1 className="text-3xl font-bold">Forgot Password?</h1>
          <p className="text-muted-foreground mt-2">Enter your email and we'll send a code to reset your password.</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="example@gmail.com" required className="bg-card/50 border-border/50" />
          </div>
          
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold">
            Send Code
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-accent hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
