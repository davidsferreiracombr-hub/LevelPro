import { RecommendationForm } from '@/components/ai/recommendation-form';
import { Bot } from 'lucide-react';

export const metadata = {
  title: 'Recomendações IA | LevelPro Accelerator',
};

export default function RecommendationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Bot className="h-8 w-8 text-accent"/>
        <div>
            <h1 className="text-3xl font-bold">Recomendações com IA</h1>
            <p className="text-muted-foreground">
                Receba estratégias personalizadas para otimizar sua progressão no jogo.
            </p>
        </div>
      </div>
      <RecommendationForm />
    </div>
  );
}
