import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are Vidyate's official AI Career Counselor for Pharmacy students.
Your expertise covers:
1. GPAT / NIPER Exam preparation (Strategy, subjects, weightage).
2. Industrial Pharmacy roles (QA, QC, Production, Formulation).
3. Clinical Research & Pharmacovigilance paths.
4. Higher studies (M.Pharm, Pharm.D, PhD in India and abroad).
5. Regulatory Affairs & IPR.

Guidelines:
- Provide structured, professional, and empathetic advice.
- Use Markdown for formatting (bolding, lists, tables).
- Be specific with Pharmacy terminology.
- Keep responses concise but information-rich.`;

// Initializing the Gemini client using the required gemini-3-pro-preview model for expert reasoning tasks.
export const getGeminiChat = () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topK: 64,
      topP: 0.95,
    },
  });
};