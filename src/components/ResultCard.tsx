import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Fish, Droplets, Ruler, Weight, Box, Scale } from "lucide-react";

interface AnalysisResult {
  species: string;
  freshness: string;
  length_cm: number;
  weight_kg: number;
  volume_cm3: number;
  confidence_scores: {
    species: number;
    freshness: number;
    scale_mode: number;
  };
  scale_mode?: string;
}

interface ResultCardProps {
  result: AnalysisResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-primary";
    if (confidence >= 0.75) return "text-secondary";
    return "text-accent";
  };

  const getFreshnessColor = (freshness: string) => {
    if (freshness.toLowerCase() === "fresh") return "bg-primary/10 text-primary";
    if (freshness.toLowerCase() === "moderate") return "bg-secondary/10 text-secondary";
    return "bg-destructive/10 text-destructive";
  };

  return (
    <Card className="shadow-ocean">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fish className="h-5 w-5" />
          Analysis Results
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Species */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Fish className="h-5 w-5 text-primary" />
              <span className="font-semibold">Species</span>
            </div>
            <Badge variant="secondary" className="text-sm">
              {(result.confidence_scores.species * 100).toFixed(1)}%
            </Badge>
          </div>
          <p className="text-lg font-bold text-primary">{result.species}</p>
          <Progress value={result.confidence_scores.species * 100} className="h-2" />
        </div>

        {/* Freshness */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Freshness</span>
            </div>
            <Badge variant="secondary" className="text-sm">
              {(result.confidence_scores.freshness * 100).toFixed(1)}%
            </Badge>
          </div>
          <Badge className={getFreshnessColor(result.freshness)}>
            {result.freshness}
          </Badge>
          <Progress value={result.confidence_scores.freshness * 100} className="h-2" />
        </div>

        {/* Measurements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Length */}
          <div className="p-4 rounded-lg bg-muted/50 border">
            <div className="flex items-center gap-2 mb-2">
              <Ruler className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Length</span>
            </div>
            <p className="text-2xl font-bold">{result.length_cm.toFixed(1)} cm</p>
          </div>

          {/* Weight */}
          <div className="p-4 rounded-lg bg-muted/50 border">
            <div className="flex items-center gap-2 mb-2">
              <Weight className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Weight</span>
            </div>
            <p className="text-2xl font-bold">{result.weight_kg.toFixed(2)} kg</p>
          </div>

          {/* Volume */}
          <div className="p-4 rounded-lg bg-muted/50 border">
            <div className="flex items-center gap-2 mb-2">
              <Box className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Volume</span>
            </div>
            <p className="text-2xl font-bold">{result.volume_cm3.toFixed(1)} cm³</p>
          </div>

          {/* Scale Mode */}
          {result.scale_mode && (
            <div className="p-4 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Scale Mode</span>
              </div>
              <p className="text-lg font-bold">{result.scale_mode}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {(result.confidence_scores.scale_mode * 100).toFixed(1)}% confidence
              </p>
            </div>
          )}
        </div>

        {/* Overall Confidence */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Overall Confidence</span>
            <span
              className={`text-lg font-bold ${getConfidenceColor(
                (result.confidence_scores.species +
                  result.confidence_scores.freshness +
                  result.confidence_scores.scale_mode) /
                  3
              )}`}
            >
              {(
                ((result.confidence_scores.species +
                  result.confidence_scores.freshness +
                  result.confidence_scores.scale_mode) /
                  3) *
                100
              ).toFixed(1)}
              %
            </span>
          </div>
          <Progress
            value={
              ((result.confidence_scores.species +
                result.confidence_scores.freshness +
                result.confidence_scores.scale_mode) /
                3) *
              100
            }
            className="h-2"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
