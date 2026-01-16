import Link from 'next/link';
import { Bot, Home, LogOut, Package, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const navItems = [
    { href: '/dashboard', label: 'Visão Geral', icon: Home },
    { href: '/dashboard/recommendations', label: 'Recomendações IA', icon: Bot },
    { href: '#', label: 'Meus Pedidos', icon: Package },
    { href: '#', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-card">
      <aside className="w-64 bg-background border-r border-border/50 flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-border/50">
           <Link href="/" className="flex items-center">
            <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={100} height={25} className="object-contain" />
          </Link>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link 
                key={item.label}
                href={item.href} 
                className="flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border/50">
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
                <LogOut className="h-5 w-5" />
                <span>Sair</span>
            </Button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-20 flex items-center justify-between px-8 border-b border-border/50">
            <div className="md:hidden">
                <Link href="/" className="flex items-center">
                  <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={100} height={25} className="object-contain" />
                </Link>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium hidden sm:inline">User Name</span>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/avatar/100/100" data-ai-hint="person avatar"/>
                    <AvatarFallback>UN</AvatarFallback>
                </Avatar>
            </div>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
