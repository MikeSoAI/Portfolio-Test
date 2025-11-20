import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { generatePortfolioHeroImage } from './services/geminiService';

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = await generatePortfolioHeroImage();
      setImageUrl(url);
    } catch (err: any) {
      console.error(err);
      setError("Failed to render scene. Please check API Key or try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Auto-generate on first load if no image
  useEffect(() => {
    if (!imageUrl && !isLoading) {
       handleGenerate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      
      <Hero 
        imageUrl={imageUrl} 
        isLoading={isLoading} 
        onGenerate={handleGenerate} 
      />

      {error && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-900/80 border border-red-500/50 text-white px-6 py-3 rounded backdrop-blur-md text-xs font-bold tracking-wide flex items-center gap-3 animate-bounce">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {error}
        </div>
      )}
    </main>
  );
};

export default App;
