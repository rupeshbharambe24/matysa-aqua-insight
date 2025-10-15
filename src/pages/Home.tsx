import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Brain, FileText, Database, Info, UserCircle, Waves } from "lucide-react";

const features = [
  {
    title: "MATSYA AI",
    description: "Analyze fish species using AI",
    icon: Brain,
    to: "/ai",
    gradient: "from-primary to-secondary",
  },
  {
    title: "Records",
    description: "View your analysis history",
    icon: FileText,
    to: "/records",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Aqua Database",
    description: "Explore fish species gallery",
    icon: Database,
    to: "/database",
    gradient: "from-accent to-primary",
  },
  {
    title: "Model Info",
    description: "View model statistics",
    icon: Info,
    to: "/info",
    gradient: "from-primary to-accent",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-light pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-ocean py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Waves className="h-16 w-16 text-white animate-pulse" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Welcome to MATSYA
          </h1>
          <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
            Your intelligent companion for fish species identification and analysis
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/ai")}
              className="shadow-lg hover:shadow-xl transition-all"
            >
              <Brain className="mr-2 h-5 w-5" />
              Start Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur"
            >
              <UserCircle className="mr-2 h-5 w-5" />
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-center">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group cursor-pointer transition-all hover:shadow-ocean hover:-translate-y-1"
              onClick={() => navigate(feature.to)}
            >
              <CardContent className="p-6">
                <div className={`mb-4 w-fit rounded-lg bg-gradient-to-br ${feature.gradient} p-3`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6 text-center">
            <h3 className="mb-3 text-2xl font-semibold">About MATSYA</h3>
            <p className="text-muted-foreground mb-4">
              MATSYA is an AI-powered fish species identification platform that helps
              researchers, fishermen, and enthusiasts identify and learn about various
              fish species through advanced image analysis.
            </p>
            <Button variant="outline" onClick={() => navigate("/about")}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
