import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePortfolioHeroImage = async (): Promise<string> => {
  try {
    // Using Imagen 3 for high-quality image generation
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: `
        A hyper-realistic, bold, and visually arresting 3D abstract composition for a high-end design portfolio.
        Background: A dark, textured space (subtle deep galaxy or dark grain), minimalist.
        Centerpiece: A large, fluid, chrome 3D abstract object, highly reflective like polished liquid metal, with subtle surface imperfections and complex highlights.
        Details: This chrome object is intertwined with a second, larger abstract object made of clear, high-refraction glass-like material.
        Lighting: Dramatic, cinematic studio lighting, strong reflections, internal refractions, high contrast.
        Vibe: Futurism, Modernist Design, Digital Art, 8k resolution, Octane render style. 
        NO TEXT in the image.
      `,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '16:9',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No image generated");
    }
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
