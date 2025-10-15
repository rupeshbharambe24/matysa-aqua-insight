import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const fishSpecies = [
  {
    id: 1,
    name: "Clownfish",
    scientificName: "Amphiprioninae",
    habitat: "Coral Reefs",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400",
  },
  {
    id: 2,
    name: "Blue Tang",
    scientificName: "Paracanthurus hepatus",
    habitat: "Indo-Pacific Reefs",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400",
  },
  {
    id: 3,
    name: "Goldfish",
    scientificName: "Carassius auratus",
    habitat: "Freshwater",
    image: "https://images.unsplash.com/photo-1520990906458-3c5b5fcb8ba5?w=400",
  },
  {
    id: 4,
    name: "Betta Fish",
    scientificName: "Betta splendens",
    habitat: "Freshwater",
    image: "https://images.unsplash.com/photo-1520299730588-90e36a2d6752?w=400",
  },
  {
    id: 5,
    name: "Angelfish",
    scientificName: "Pterophyllum",
    habitat: "Amazon Basin",
    image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=400",
  },
  {
    id: 6,
    name: "Guppy",
    scientificName: "Poecilia reticulata",
    habitat: "Freshwater",
    image: "https://images.unsplash.com/photo-1525319995555-19112ef49a1e?w=400",
  },
];

const Database = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpecies = fishSpecies.filter(
    (fish) =>
      fish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fish.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
          Aqua Database
        </h1>
        <p className="text-muted-foreground mb-6">
          Explore our comprehensive fish species gallery
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search species..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Species Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSpecies.map((fish) => (
          <Card
            key={fish.id}
            className="group cursor-pointer transition-all hover:shadow-ocean hover:-translate-y-1"
          >
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{fish.name}</h3>
                <p className="text-sm text-muted-foreground italic mb-2">
                  {fish.scientificName}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {fish.habitat}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSpecies.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">No species found</p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search query
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Database;
