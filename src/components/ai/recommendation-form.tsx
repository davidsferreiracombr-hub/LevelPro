"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  getPersonalizedRecommendations,
  PersonalizedRecommendationsOutput,
} from "@/ai/flows/personalized-leveling-recommendations";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  gameName: z.string().min(2, "Nome do jogo é obrigatório."),
  userLevel: z.coerce.number().min(1, "Nível deve ser pelo menos 1."),
  playStyle: z.string({ required_error: "Estilo de jogo é obrigatório." }),
  timeAvailable: z.string({ required_error: "Tempo disponível é obrigatório." }),
});

type FormData = z.infer<typeof formSchema>;

export function RecommendationForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<PersonalizedRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameName: "",
      userLevel: 1,
    },
  });

  function onSubmit(values: FormData) {
    setResult(null);
    startTransition(async () => {
      try {
        const recommendation = await getPersonalizedRecommendations(values);
        setResult(recommendation);
      } catch (error) {
        console.error(error);
        toast({
          title: "Erro",
          description: "Não foi possível gerar a recomendação. Tente novamente.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Gerador de Estratégia</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="gameName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Jogo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Genshin Impact" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Nível Atual</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="playStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estilo de Jogo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu estilo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Agressivo">Agressivo</SelectItem>
                        <SelectItem value="Estratégico">Estratégico</SelectItem>
                        <SelectItem value="Casual">Casual</SelectItem>
                        <SelectItem value="Explorador">Explorador</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeAvailable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tempo Disponível para Jogar</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu tempo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-2 horas por dia">1-2 horas / dia</SelectItem>
                        <SelectItem value="3-4 horas por dia">3-4 horas / dia</SelectItem>
                        <SelectItem value="Apenas fins de semana">Apenas fins de semana</SelectItem>
                        <SelectItem value="Mais de 5 horas por dia">Mais de 5 horas / dia</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  "Gerar Recomendação"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-center">
        {isPending ? (
          <div className="text-center">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-accent" />
            <p className="mt-4 text-muted-foreground">Analisando dados e consultando nossos estrategistas...</p>
          </div>
        ) : result ? (
          <Card className="w-full bg-card border-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Sparkles />
                Sua Estratégia Personalizada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert prose-p:text-foreground prose-strong:text-accent">
                 <p>{result.recommendations}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
           <div className="text-center text-muted-foreground p-8 border-2 border-dashed border-border rounded-lg">
                <Bot className="mx-auto h-12 w-12" />
                <p className="mt-4">Suas recomendações aparecerão aqui.</p>
           </div>
        )}
      </div>
    </div>
  );
}
