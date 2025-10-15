import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_BASE_URL = "http://localhost:8000";

interface SaveButtonProps {
  result: any;
  imageFile: File | null;
  disabled?: boolean;
}

const SaveButton = ({ result, imageFile, disabled }: SaveButtonProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    if (!result || !imageFile) return;

    setIsSaving(true);

    try {
      // Simulate API call - replace with actual API later
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Future API integration:
      // const formData = new FormData();
      // formData.append('image', imageFile);
      // formData.append('data', JSON.stringify(result));
      // const response = await fetch(`${API_BASE_URL}/api/save_record`, {
      //   method: 'POST',
      //   body: formData,
      // });
      // const data = await response.json();

      const recordId = `MATSYA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

      setIsSaved(true);
      toast({
        title: "✅ Record saved successfully!",
        description: `Unique ID: ${recordId}`,
        duration: 5000,
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Failed to save record",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isSaved) {
    return (
      <Button size="lg" className="w-full" disabled>
        <CheckCircle2 className="mr-2 h-5 w-5" />
        Saved Successfully
      </Button>
    );
  }

  return (
    <Button
      onClick={handleSave}
      disabled={disabled || isSaving}
      size="lg"
      className="w-full"
    >
      {isSaving ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Saving...
        </>
      ) : (
        <>
          <Save className="mr-2 h-5 w-5" />
          Save Record
        </>
      )}
    </Button>
  );
};

export default SaveButton;
