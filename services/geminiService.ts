import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// We initialize the client lazily to ensure environment variables are ready if needed.
let aiClient: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI | null => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "undefined") {
      console.warn("Gemini API Key is missing. AI Barista will be disabled.");
      return null;
    }
    try {
      aiClient = new GoogleGenAI({ apiKey });
    } catch (error) {
      console.error("Failed to initialize Gemini:", error);
      return null;
    }
  }
  return aiClient;
};

export const createChatSession = (): Chat | null => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    return ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return null;
  }
};

export const sendMessageToBarista = async (
  chat: Chat,
  message: string,
): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I'm lost in the void... can you repeat that?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The connection to the nebulas is weak right now. Try again later.";
  }
};
