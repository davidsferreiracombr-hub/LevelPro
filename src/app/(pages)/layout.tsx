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
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
