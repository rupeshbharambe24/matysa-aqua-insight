import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageCaptureProps {
  onImageSelected: (file: File, preview: string) => void;
  selectedImage: string | null;
  onClear: () => void;
}

const ImageCapture = ({ onImageSelected, selectedImage, onClear }: ImageCaptureProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use back camera on mobile
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsCameraOpen(true);
      }
    } catch (error) {
      toast({
        title: "Camera Access Denied",
        description: "Please enable camera permissions to capture images",
        variant: "destructive",
      });
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "capture.jpg", { type: "image/jpeg" });
            const preview = URL.createObjectURL(blob);
            onImageSelected(file, preview);
            closeCamera();
          }
        }, "image/jpeg");
      }
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setIsCameraOpen(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      
      const preview = URL.createObjectURL(file);
      onImageSelected(file, preview);
    }
  };

  if (selectedImage) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-64 object-cover"
            />
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-2 right-2"
              onClick={onClear}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isCameraOpen) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-64 rounded-lg object-cover bg-black"
            />
            <div className="flex gap-3">
              <Button onClick={capturePhoto} className="flex-1" size="lg">
                <Camera className="mr-2 h-5 w-5" />
                Capture
              </Button>
              <Button onClick={closeCamera} variant="outline" size="lg">
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Camera className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-6">
              Capture or upload a fish image for AI analysis
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={openCamera} className="flex-1" size="lg">
                <Camera className="mr-2 h-5 w-5" />
                Capture Image
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="secondary"
                className="flex-1"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Image
              </Button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Supported formats: JPG, PNG, JPEG (max 10MB)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCapture;
