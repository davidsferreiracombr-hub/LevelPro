"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/games', label: 'Jogos' },
  { href: '/pricing', label: 'Preços' },
  { href: '/how-it-works', label: 'Como funciona' },
  { href: '/contact', label: 'Contato' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="container mx-auto px-4">
        <div className="relative mt-2 md:mt-4 flex h-14 md:h-16 items-center justify-between rounded-full border border-border/50 bg-background/50 backdrop-blur-xl shadow-lg px-4 md:px-6">
          <nav className="hidden md:flex items-center gap-6 absolute left-6 top-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <Link href="/" className="flex items-center">
              <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={80} height={20} className="object-contain" />
            </Link>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 w-[80%]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-center items-center border-b pb-4">
                      <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={80} height={20} className="object-contain" />
                      </Link>
                    </div>
                    <nav className="flex flex-col gap-4 mt-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_20px_hsl(var(--accent))] transition-all duration-300 text-base py-5">
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Entrar</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
             <div className="hidden md:flex items-center">
                <Button asChild className="font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_20px_hsl(var(--accent))] transition-all duration-300">
                <Link href="/login">Entrar</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
