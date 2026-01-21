"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/#nossos-servicos', label: 'JOGOS' },
  { href: '/#contato', label: 'CONTATO' },
  { href: '/how-it-works', label: 'COMO FUNCIONA' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="container mx-auto px-4">
        <div className="mt-2 md:mt-4 grid h-14 grid-cols-3 items-center rounded-md border border-border/30 bg-background/30 px-4 shadow-lg backdrop-blur-xl">
          <div className="justify-self-start">
            <nav className="hidden items-center gap-4 md:flex">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium uppercase text-foreground transition-colors hover:text-accent">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link href="/" className="justify-self-center">
            <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={70} height={20} className="object-contain h-auto w-[70px]" />
          </Link>

          <div className="flex items-center justify-end gap-2">
             <div className="hidden md:flex">
                <Button asChild className="font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_20px_hsl(var(--accent))] transition-[background-color,box-shadow] duration-300">
                  <Link href="/#contato">Começar agora</Link>
                </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] bg-background/95">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-center border-b pb-4">
                      <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={80} height={20} className="object-contain h-auto" />
                      </Link>
                    </div>
                    <nav className="mt-6 flex flex-col gap-4">
                       <Link
                          href="/"
                          className="text-lg font-medium uppercase text-foreground transition-colors hover:text-accent"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Início
                        </Link>
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium uppercase text-foreground transition-colors hover:text-accent"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full py-5 text-base font-semibold bg-accent text-accent-foreground transition-[background-color,box-shadow] duration-300 hover:bg-accent/90 shadow-[0_0_15px_hsl(var(--accent))] hover:shadow-[0_0_20px_hsl(var(--accent))]">
                        <Link href="/#contato" onClick={() => setIsMobileMenuOpen(false)}>Começar agora</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
