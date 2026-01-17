import { GoogleGenAI, Type } from "@google/genai";
import { DailyLesson } from "../types";

// Fallback content in case API key is missing or fails
export const FALLBACK_LESSON: DailyLesson = {
  day: 12,
  title: "Go Slices",
  concept: {
    description: "Slices are a key data type in Go, giving a more powerful interface to sequences than arrays.",
    codeSnippet: `package main

import "fmt"

func main() {
    // Creating a slice with make
    s := make([]int, 3)
    s[0] = 1
    s[1] = 2
    s[2] = 3
    fmt.Println("Slice:", s)
    
    // Appending adds elements dynamically
    s = append(s, 4)
    fmt.Println("Appended:", s)
}`,
    explanation: "Unlike arrays, slices are typed only by the elements they contain (not the number of elements). An uninitialized slice equals to nil and has length 0."
  },
  challenge: {
    description: "Create a slice of strings containing 3 names, then append 'Gopher' to it and print the result.",
    initialCode: `package main

import "fmt"

func main() {
    // TODO: Create a slice of strings
    
    // TODO: Append "Gopher"
    
    // TODO: Print the slice
}`
  }
};

export const generateDailyContent = async (day: number): Promise<DailyLesson> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("No API Key found, using fallback content.");
    return FALLBACK_LESSON;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a daily lesson for learning Go (Golang) for day ${day}. 
      Include a concept explanation, a code snippet, and a small coding challenge.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            day: { type: Type.INTEGER },
            title: { type: Type.STRING },
            concept: {
              type: Type.OBJECT,
              properties: {
                description: { type: Type.STRING },
                codeSnippet: { type: Type.STRING },
                explanation: { type: Type.STRING },
              }
            },
            challenge: {
              type: Type.OBJECT,
              properties: {
                description: { type: Type.STRING },
                initialCode: { type: Type.STRING },
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as DailyLesson;
    }
    return FALLBACK_LESSON;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_LESSON;
  }
};

export const checkCodeWithGemini = async (code: string, problemDescription: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key missing. Cannot verify code.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Review this Go code solution for the problem: "${problemDescription}".
      
      Code:
      ${code}
      
      Provide a brief, encouraging feedback message (max 2 sentences). If there is an error, explain it simply.`,
    });
    return response.text || "No feedback received.";
  } catch (e) {
    return "Could not connect to AI for verification.";
  }
};
