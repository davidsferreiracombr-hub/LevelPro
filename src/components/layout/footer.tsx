import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
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
          <div className="flex items-center gap-4 h-5" />
        </div>
      </div>
    </footer>
  );
}
