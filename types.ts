export interface ImageGenerationState {
  isLoading: boolean;
  imageUrl: string | null;
  error: string | null;
}

export interface HeroProps {
  imageUrl: string | null;
  onGenerate: () => void;
  isLoading: boolean;
}
