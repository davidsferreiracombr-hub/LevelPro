import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-20 md:pt-24 pb-8 md:pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
