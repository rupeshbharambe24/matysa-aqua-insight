import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
          About MATSYA
        </h1>
        <p className="text-muted-foreground">
          Empowering marine research through AI
        </p>
      </div>

      {/* Mission */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            MATSYA aims to democratize fish species identification by providing an accessible,
            AI-powered platform for researchers, fishermen, aquarium enthusiasts, and marine
            conservationists. We believe that technology can bridge the gap between marine
            biodiversity and those who study and protect it.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Fish className="h-5 w-5" />
            What We Offer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">AI-Powered Identification</h4>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art deep learning models trained on thousands of fish images
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-secondary font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Comprehensive Database</h4>
                <p className="text-sm text-muted-foreground">
                  Extensive collection of fish species with detailed information
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Record History</h4>
                <p className="text-sm text-muted-foreground">
                  Keep track of your identifications and build your personal database
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Our Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-4">
            MATSYA is developed by a dedicated team of marine biologists, data scientists,
            and software engineers passionate about marine conservation and technological innovation.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold mb-1">Research Team</h4>
              <p className="text-sm text-muted-foreground">
                Marine biology experts and AI researchers
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold mb-1">Development Team</h4>
              <p className="text-sm text-muted-foreground">
                Full-stack developers and ML engineers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Values */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Our Values
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Accessibility for all users</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-sm">Scientific accuracy and reliability</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-sm">Open collaboration and knowledge sharing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Environmental conservation and awareness</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
