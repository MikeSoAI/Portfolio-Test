import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePortfolioHeroImage = async (): Promise<string> => {
  try {
    // Using Imagen 3 for high-quality image generation
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: `
        A hyper-realistic, bold, and visually arresting 3D abstract composition for a modern design portfolio.
        Background: A deep, dark void, but with very subtle ambient neon smoke in cyan and magenta.
        Centerpiece: A large, fluid, HOLOGRAPHIC CHROME 3D abstract object. It looks like polished liquid metal with intense prismatic dispersion (rainbow, cyan, neon purple, hot pink reflections).
        Details: Intertwined with crystal clear, glossy glass shapes that refract the colorful light.
        Lighting: High-contrast editorial studio lighting. Strong rim lights in Electric Blue and Neon Pink.
        Vibe: Cyber-organic, Y2K Futurism, Modernist Design, 8k resolution, Octane render style, highly colorful and bold against the dark background.
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