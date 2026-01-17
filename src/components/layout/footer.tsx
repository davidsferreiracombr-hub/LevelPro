import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram', colorClass: 'hover:text-[#E1306C]' },
    { icon: Facebook, href: '#', name: 'Facebook', colorClass: 'hover:text-[#1877F2]' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center">
            <Image src="https://i.imgur.com/393nLfg.png" alt="LevelUp Logo" width={80} height={20} className="object-contain" />
          </Link>
          <p className="text-xs text-center md:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LevelPro Accelerator. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name} 
                className={cn("text-muted-foreground transition-colors", social.colorClass)}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
