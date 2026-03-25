'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized cease and desist letter.
 *
 * - generateCeaseAndDesistLetter - A function that generates a cease and desist letter.
 * - GenerateCeaseAndDesistLetterInput - The input type for the generateCeaseAndDesistLetter function.
 * - GenerateCeaseAndDesistLetterOutput - The return type for the generateCeaseAndDesistLetter function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateCeaseAndDesistLetterInputSchema = z.object({
  fullName: z.string().describe("The user's full name."),
  email: z.string().email().describe("The user's email address."),
  address: z.string().describe("The user's full mailing address."),
  debtCollectorName: z.string().describe('The name of the debt collector.'),
  collectorAddress: z.string().describe('The mailing address of the debt collector.'),
  accountNumber: z.string().describe('The account number associated with the debt.').optional(),
  harassmentDescription: z.string().describe('A detailed description of the harassment experienced.'),
});
export type GenerateCeaseAndDesistLetterInput = z.infer<typeof GenerateCeaseAndDesistLetterInputSchema>;

const GenerateCeaseAndDesistLetterOutputSchema = z.object({
  letterContent: z.string().describe('The professionally generated cease and desist letter content.'),
});
export type GenerateCeaseAndDesistLetterOutput = z.infer<typeof GenerateCeaseAndDesistLetterOutputSchema>;

export async function generateCeaseAndDesistLetter(input: GenerateCeaseAndDesistLetterInput): Promise<GenerateCeaseAndDesistLetterOutput> {
  return generateCeaseAndDesistLetterFlow(input);
}

const generateCeaseAndDesistLetterPrompt = ai.definePrompt({
  name: 'generateCeaseAndDesistLetterPrompt',
  input: { schema: GenerateCeaseAndDesistLetterInputSchema },
  output: { schema: GenerateCeaseAndDesistLetterOutputSchema },
  prompt: `You are a professional legal assistant specialized in consumer protection law, particularly the Fair Debt Collection Practices Act (FDCPA).
Your task is to draft a formal cease and desist letter to a debt collector on behalf of an individual experiencing harassment.

The letter must be professional, legally sound, and clearly state that the recipient must cease all communication with the individual.
Include the current date, the sender's full address, the recipient's name and address, a subject line, and a formal closing.
Reference the FDCPA where appropriate to inform the collector of their legal obligations.
If an account number is provided, include it in the letter to specify the debt.
Conclude the letter with a demand for cessation of all contact and a statement that further communication may result in legal action.

Ensure the output is ONLY the letter content in a clear, formatted text block, suitable for direct use or PDF conversion.

--- Letter Details ---
Sender's Full Name: {{{fullName}}}
Sender's Address: {{{address}}}
Debt Collector Name: {{{debtCollectorName}}}
Debt Collector Address: {{{collectorAddress}}}
{{#if accountNumber}}
Account Number: {{{accountNumber}}}
{{/if}}
Description of Harassment: {{{harassmentDescription}}}

--- Begin Letter ---
`,
});

const generateCeaseAndDesistLetterFlow = ai.defineFlow(
  {
    name: 'generateCeaseAndDesistLetterFlow',
    inputSchema: GenerateCeaseAndDesistLetterInputSchema,
    outputSchema: GenerateCeaseAndDesistLetterOutputSchema,
  },
  async (input) => {
    const { output } = await generateCeaseAndDesistLetterPrompt(input);
    return output!;
  }
);
