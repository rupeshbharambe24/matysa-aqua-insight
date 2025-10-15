import { Fish } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-gradient-ocean p-2">
            <Fish className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            MATSYA
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
