
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Strictly use process.env.API_KEY for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const geminiService = {
  async generateContentIdeas(niche: string) {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 5 viral Instagram content ideas for a ${niche} creator. Include a mix of Reels, Stories, and Carousels.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              format: { type: Type.STRING }
            },
            required: ["title", "description", "format"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  },

  async suggestBio(style: string, niche: string) {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write 3 unique Instagram bios for a ${niche} profile in a ${style} style. Use emojis and clever spacing.`,
    });
    return response.text;
  }
};
