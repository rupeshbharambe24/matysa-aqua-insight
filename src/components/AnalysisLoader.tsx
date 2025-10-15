import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle2 } from "lucide-react";

const analysisSteps = [
  { label: "Performing segmentation...", duration: 2000 },
  { label: "Identifying species...", duration: 2500 },
  { label: "Analyzing freshness...", duration: 2000 },
  { label: "Calculating weight & volume...", duration: 1500 },
  { label: "Done!", duration: 500 },
];

interface AnalysisLoaderProps {
  onComplete: () => void;
}

const AnalysisLoader = ({ onComplete }: AnalysisLoaderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStep >= analysisSteps.length) {
      onComplete();
      return;
    }

    const stepDuration = analysisSteps[currentStep].duration;
    const progressIncrement = 100 / analysisSteps.length;
    
    // Update progress smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const targetProgress = (currentStep + 1) * progressIncrement;
        const newProgress = Math.min(prev + 2, targetProgress);
        return newProgress;
      });
    }, 50);

    // Move to next step
    const stepTimer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, stepDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimer);
    };
  }, [currentStep, onComplete]);

  return (
    <Card className="border-primary/20 shadow-ocean">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Analyzing Image</h3>
            <p className="text-sm text-muted-foreground">
              Please wait while our AI processes your image
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-center text-muted-foreground">
              {Math.round(progress)}% complete
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-3">
            {analysisSteps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              const isPending = index > currentStep;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isCurrent
                      ? "bg-primary/10 border border-primary/20"
                      : isCompleted
                      ? "bg-muted/50"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : isCurrent ? (
                      <Loader2 className="h-5 w-5 text-primary animate-spin" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isCurrent ? "text-foreground" : isPending ? "text-muted-foreground" : ""
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalysisLoader;
