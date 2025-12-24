import { GoogleGenAI } from "@google/genai";
import { Coin } from "../types";

export const analyzeMarket = async (coins: Coin[]): Promise<string> => {
  // If no API key is set, return a mock message to avoid crashing in demo
  if (!process.env.API_KEY) {
    return "API Key Gemini belum dikonfigurasi. Silakan tambahkan API Key untuk mendapatkan analisis pasar real-time.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct a prompt based on the current coin data
    const marketSummary = coins.map(c => 
      `${c.name} ($${c.current_price}, ${c.price_change_percentage_24h}% 24h)`
    ).join('\n');

    const prompt = `
      Bertindaklah sebagai analis kripto profesional "Kanda Beta Currency".
      Analisis data pasar top 10 kripto berikut secara singkat dan padat (maksimal 2 paragraf).
      Berikan sentimen pasar (Bullish/Bearish/Neutral) dan highlight koin yang paling menarik.
      Gunakan bahasa Indonesia yang santai namun profesional.
      
      Data Pasar:
      ${marketSummary}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Tidak ada respon dari AI.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, sistem AI sedang sibuk. Silakan coba lagi nanti.";
  }
};