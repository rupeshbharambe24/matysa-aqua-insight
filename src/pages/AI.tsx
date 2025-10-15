import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_BASE_URL = "http://localhost:8000";

const AI = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please select an image to analyze",
        variant: "destructive",
      });
      return;
    }

    setAnalyzing(true);
    
    // Simulate API call - replace with actual API call later
    setTimeout(() => {
      setAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Fish species identified successfully!",
      });
    }, 2000);

    // Future API integration:
    // const formData = new FormData();
    // formData.append('image', selectedImage);
    // const response = await fetch(`${API_BASE_URL}/analyze`, {
    //   method: 'POST',
    //   body: formData,
    // });
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
          MATSYA AI Analysis
        </h1>
        <p className="text-muted-foreground">
          Upload a fish image for AI-powered species identification
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-muted-foreground">
                    PNG, JPG, JPEG (max 10MB)
                  </span>
                </label>
              </div>

              {previewUrl && (
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              <Button
                onClick={handleAnalyze}
                disabled={!selectedImage || analyzing}
                className="w-full"
                size="lg"
              >
                {analyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Image"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-muted-foreground">
              <ImageIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Upload and analyze an image to see results</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 sm:grid-cols-3 mt-6">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">95%+</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Species</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-accent mb-1">Fast</div>
            <div className="text-sm text-muted-foreground">Real-time</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AI;
