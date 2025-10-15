import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Database, TrendingUp } from "lucide-react";

const modelStats = [
  { label: "Overall Accuracy", value: 96.5, icon: Target, color: "text-primary" },
  { label: "Training Samples", value: 10000, icon: Database, color: "text-secondary", suffix: "+" },
  { label: "Species Coverage", value: 50, icon: Brain, color: "text-accent", suffix: "+" },
  { label: "Inference Speed", value: 98, icon: TrendingUp, color: "text-primary", suffix: "ms" },
];

const ModelInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
          Model Information
        </h1>
        <p className="text-muted-foreground">
          Performance metrics and dataset statistics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 mb-8">
        {modelStats.map((stat) => (
          <Card key={stat.label} className="hover:shadow-ocean transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gradient-ocean`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold mb-1">
                    {stat.value}
                    {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Model Architecture */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Model Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium">Convolutional Neural Network (CNN)</span>
              <span className="text-muted-foreground">Deep Learning</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Our model uses a state-of-the-art CNN architecture trained on thousands of fish images.
              It achieves high accuracy through transfer learning and fine-tuning.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Training Accuracy</span>
                <span className="font-medium">97.2%</span>
              </div>
              <Progress value={97.2} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Validation Accuracy</span>
                <span className="font-medium">96.5%</span>
              </div>
              <Progress value={96.5} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Test Accuracy</span>
                <span className="font-medium">95.8%</span>
              </div>
              <Progress value={95.8} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dataset Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Dataset Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span className="text-sm font-medium">Total Images</span>
              <span className="text-sm text-muted-foreground">10,000+</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-sm font-medium">Species Classes</span>
              <span className="text-sm text-muted-foreground">50+</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-sm font-medium">Training Split</span>
              <span className="text-sm text-muted-foreground">70%</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-sm font-medium">Validation Split</span>
              <span className="text-sm text-muted-foreground">20%</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-sm font-medium">Test Split</span>
              <span className="text-sm text-muted-foreground">10%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelInfo;
