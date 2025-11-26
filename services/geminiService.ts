import { GoogleGenAI } from "@google/genai";

// Ensure API Key is available
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateMarketingCopy = async (productName: string): Promise<string> => {
  if (!ai) return "API Key missing. Cannot generate content.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a futuristic, high-energy marketing tagline and a short description for a product named "${productName}". The tone should be premium and scientific.`,
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please try again.";
  }
};

export const generateBlogIdeas = async (topic: string): Promise<string> => {
  if (!ai) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 3 blog post titles about "${topic}" suitable for a sci-tech heritage website.`,
    });
    return response.text || "No ideas generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating ideas.";
  }
};
