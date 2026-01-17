'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPricingPage = pathname === '/pricing';
  const isHowItWorksPage = pathname === '/how-it-works';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={cn(
          'flex-grow',
          !isPricingPage &&
            !isHowItWorksPage &&
            'container mx-auto px-4 pt-20 md:pt-24 pb-8 md:pb-12'
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
