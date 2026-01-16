import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contato | LevelPro Accelerator',
};

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, text: 'contato@levelpro.gg', href: 'mailto:contato@levelpro.gg' },
    { icon: Phone, text: '+55 (11) 99999-8888', href: 'tel:+5511999998888' },
    { icon: MapPin, text: 'São Paulo, SP - Atendimento Online', href: '#' },
  ];
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-accent">Entre em Contato</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Tem alguma dúvida? Nossa equipe está pronta para ajudar.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Envie uma Mensagem</CardTitle>
            <CardDescription>Preencha o formulário e responderemos o mais breve possível.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Sobre o que você quer falar?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Escreva sua mensagem aqui..." rows={5} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Enviar Mensagem</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline">Nossas Informações</h2>
            <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.text} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-card flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-accent" />
                </div>
                <a href={info.href} className="text-muted-foreground hover:text-accent transition-colors">{info.text}</a>
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
