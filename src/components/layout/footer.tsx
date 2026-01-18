import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { text: 'T', href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', name: 'TikTok', colorClass: 'hover:text-white' },
    { text: 'I', href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', name: 'Instagram', colorClass: 'hover:text-[#E1306C]' },
    { text: 'Y', href: 'https://www.instagram.com/levelpro_game?igsh=MTJ4d2hudGcyZTRsMQ==', name: 'YouTube', colorClass: 'hover:text-[#FF0000]' },
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
                className={cn("text-muted-foreground transition-colors w-5 h-5 flex items-center justify-center", social.colorClass)}
              >
                <span className="font-bold text-lg">{social.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
