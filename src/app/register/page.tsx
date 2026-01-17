'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.618-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.59,44,30.817,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);
  
const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.3,5.62C18.2,4.95,16.89,4.1,15.5,4.1c-1.74,0-3.32.91-4.21,2.23c-1.12,1.65-1.7,3.92,0,5.3c0.75,0.6,1.86,1.01,2.96,1.01c0.3,0,0.6-0.03,0.9-0.08c1.3-0.23,2.4-0.94,3.24-2.22c-1.34,0.04-2.68-0.56-3.55-1.57C14.16,8,14.18,6.2,15.61,5.29c0.78-0.5,1.8-0.67,2.7-0.42C18.89,5.02,19.3,5.62,19.3,5.62z M15.33,2.44c-0.12-0.14-0.25-0.28-0.38-0.42c-1.4-1.5-3.5-2.02-5.19-2.02c-2.31,0-4.7,1.25-5.99,3.13c-2.48,3.6-0.82,8.8,1.69,11.59c1.2,1.33,2.6,2.66,4.3,2.66c1.64,0,2.23-0.89,4.21-0.89c1.92,0,2.45,0.89,4.21,0.89c1.7,0,3.1-1.33,4.23-2.59c-0.1-0.06-2.52-1.54-2.54-4.89c0.03-2.75,2.06-4.14,2.2-4.28c-1.31-1.8-3.4-2.81-5.33-2.81C16.9,6.85,15.96,7.44,15.33,2.44z" />
    </svg>
);

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

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
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-muted-foreground mt-2">Join us and start your journey to pro.</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" type="text" placeholder="Alex Smith" required className="bg-card/50 border-border/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="example@gmail.com" required className="bg-card/50 border-border/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                className="bg-card/50 border-border/50 pr-10"
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
          </div>
          
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold">
            Register
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12 bg-card/50 border-border/50 hover:bg-muted font-medium">
            <GoogleIcon className="mr-2" />
            Google
          </Button>
          <Button variant="outline" className="h-12 bg-card/50 border-border/50 hover:bg-muted font-medium">
            <AppleIcon className="mr-2" />
            Apple
          </Button>
        </div>

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
