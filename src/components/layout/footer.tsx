import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { TiktokIcon } from '../icons/tiktok';

export default function Footer() {
  const socialLinks = [
    { icon: TiktokIcon, href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', name: 'TikTok', colorClass: 'hover:text-white' },
    { icon: Instagram, href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', name: 'Instagram', colorClass: 'hover:text-[#E1306C]' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image src="https://i.imgur.com/U8Qm9wx.png" alt="LevelUp Logo" width={80} height={20} className="object-contain h-auto" />
          </Link>
          <p className="text-xs text-center md:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LevelPro. Todos os direitos reservados.
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
