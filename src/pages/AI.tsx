import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ImageCapture from "@/components/ImageCapture";
import AnalysisLoader from "@/components/AnalysisLoader";
import ResultCard from "@/components/ResultCard";
import SaveButton from "@/components/SaveButton";

const API_BASE_URL = "http://localhost:8000";

// Mock response for testing
const mockAnalysisResult = {
  species: "Labeo rohita",
  freshness: "Fresh",
  length_cm: 22.4,
  weight_kg: 0.86,
  volume_cm3: 902.1,
  confidence_scores: {
    species: 0.94,
    freshness: 0.91,
    scale_mode: 0.89,
  },
  scale_mode: "Standard",
};

type AnalysisState = "idle" | "analyzing" | "complete";

const AI = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysisState, setAnalysisState] = useState<AnalysisState>("idle");
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleImageSelected = (file: File, preview: string) => {
    setSelectedImage(file);
    setPreviewUrl(preview);
    setAnalysisState("idle");
    setAnalysisResult(null);
  };

  const handleClearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
    setAnalysisState("idle");
    setAnalysisResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setAnalysisState("analyzing");

    // Future API integration:
    // const formData = new FormData();
    // formData.append('image', selectedImage);
    // const response = await fetch(`${API_BASE_URL}/api/analyze`, {
    //   method: 'POST',
    //   body: formData,
    // });
    // const result = await response.json();
    // setAnalysisResult(result);
  };

  const handleAnalysisComplete = () => {
    // Simulate receiving results from backend
    setAnalysisResult(mockAnalysisResult);
    setAnalysisState("complete");
  };

  const handleStartNew = () => {
    handleClearImage();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
          MATSYA AI Analysis
        </h1>
        <p className="text-muted-foreground">
          Capture or upload a fish image for comprehensive AI-powered analysis
        </p>
      </div>

      <div className="space-y-6">
        {/* Image Capture/Preview */}
        {analysisState === "idle" && (
          <>
            <ImageCapture
              onImageSelected={handleImageSelected}
              selectedImage={previewUrl}
              onClear={handleClearImage}
            />

            {selectedImage && (
              <Button onClick={handleAnalyze} className="w-full" size="lg">
                Analyze Image
              </Button>
            )}
          </>
        )}

        {/* Analysis Loader */}
        {analysisState === "analyzing" && (
          <AnalysisLoader onComplete={handleAnalysisComplete} />
        )}

        {/* Results */}
        {analysisState === "complete" && analysisResult && (
          <>
            {/* Image Preview */}
            {previewUrl && (
              <div className="rounded-lg overflow-hidden border shadow-card">
                <img
                  src={previewUrl}
                  alt="Analyzed"
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            {/* Results */}
            <ResultCard result={analysisResult} />

            {/* Action Buttons */}
            <div className="space-y-3">
              <SaveButton
                result={analysisResult}
                imageFile={selectedImage}
                disabled={!analysisResult}
              />
              <Button
                onClick={handleStartNew}
                variant="outline"
                size="lg"
                className="w-full"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Analyze Another Image
              </Button>
            </div>
          </>
        )}

        {/* Info Cards (shown when idle) */}
        {analysisState === "idle" && !selectedImage && (
          <div className="grid gap-4 sm:grid-cols-3 mt-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <div className="text-3xl font-bold text-primary mb-1">95%+</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 text-center">
              <div className="text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Species</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center">
              <div className="text-3xl font-bold text-accent mb-1">&lt;5s</div>
              <div className="text-sm text-muted-foreground">Real-time</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AI;
