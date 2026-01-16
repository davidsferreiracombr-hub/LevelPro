'use server';

/**
 * @fileOverview Provides personalized leveling strategy recommendations for mobile games.
 *
 * - getPersonalizedRecommendations - A function that generates personalized leveling recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  gameName: z.string().describe('The name of the mobile game.'),
  userLevel: z.number().describe('The current level of the user in the game.'),
  playStyle: z.string().describe('The user play style (e.g., aggressive, strategic, casual).'),
  timeAvailable: z.string().describe('The amount of time the user has available to play (e.g., 1 hour per day, 5 hours per week).'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('Personalized recommendations for efficient leveling strategies.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedLevelingRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLevelingRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert mobile game strategist. Based on the game, current user level, play style, and time available, provide personalized recommendations for the most efficient leveling strategies.

Game: {{{gameName}}}
Current Level: {{{userLevel}}}
Play Style: {{{playStyle}}}
Time Available: {{{timeAvailable}}}

Provide clear and actionable recommendations to optimize the user's account progression and achieve faster results.`,
});

const personalizedLevelingRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedLevelingRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
