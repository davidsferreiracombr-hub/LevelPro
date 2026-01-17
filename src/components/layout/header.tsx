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
        <div className="relative mt-4 flex h-14 items-center justify-center md:justify-between rounded-full border border-border/50 bg-background/80 px-6 backdrop-blur-sm shadow-lg">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 w-[80%]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b pb-4">
                    <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={100} height={25} className="object-contain" />
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-6 mt-8">
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
                    <Button asChild className="w-full font-semibold border-accent/30 bg-accent/20 text-accent hover:bg-accent/30 hover:text-accent backdrop-blur-sm text-lg py-6">
                      <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Entrar</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/" className="flex items-center px-6">
            <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={120} height={30} className="object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button asChild className="font-semibold border-accent/30 bg-accent/20 text-accent hover:bg-accent/30 hover:text-accent backdrop-blur-sm">
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
