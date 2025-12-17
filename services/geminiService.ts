import { GoogleGenAI } from "@google/genai";
import { Match } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMatchPrediction = async (match: Match): Promise<string> => {
  try {
    const prompt = `
      Act as an energetic, expert football commentator and analyst.
      Analyze the upcoming match between ${match.homeTeam.name} and ${match.awayTeam.name}.
      
      Current Stats:
      ${match.homeTeam.name}: Wins ${match.homeTeam.wins}, Points ${match.homeTeam.points}
      ${match.awayTeam.name}: Wins ${match.awayTeam.wins}, Points ${match.awayTeam.points}
      
      Provide a short, exciting prediction (max 3 sentences) about who might win and why. 
      Focus on the key strengths of the teams. Keep it hyped up like an esports announcer.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Prediction unavailable at this time.";
  } catch (error) {
    console.error("Error getting prediction:", error);
    return "Our AI analyst is currently offline. Check back later for predictions!";
  }
};
