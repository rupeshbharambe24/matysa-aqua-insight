import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Fish } from "lucide-react";

const dummyRecords = [
  {
    id: 1,
    species: "Clownfish",
    confidence: 98.5,
    date: "2025-10-14",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400",
  },
  {
    id: 2,
    species: "Blue Tang",
    confidence: 95.2,
    date: "2025-10-13",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400",
  },
  {
    id: 3,
    species: "Goldfish",
    confidence: 97.8,
    date: "2025-10-12",
    image: "https://images.unsplash.com/photo-1520990906458-3c5b5fcb8ba5?w=400",
  },
];

const Records = () => {
  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
          Analysis Records
        </h1>
        <p className="text-muted-foreground">
          Your previous fish species identifications
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold mb-1">{dummyRecords.length}</div>
            <div className="text-sm text-muted-foreground">Total Records</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Fish className="h-8 w-8 mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold mb-1">3</div>
            <div className="text-sm text-muted-foreground">Species Found</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold mb-1">97%</div>
            <div className="text-sm text-muted-foreground">Avg Confidence</div>
          </CardContent>
        </Card>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {dummyRecords.map((record) => (
          <Card key={record.id} className="hover:shadow-ocean transition-all">
            <CardContent className="p-0">
              <div className="flex gap-4 p-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={record.image}
                    alt={record.species}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold truncate">
                      {record.species}
                    </h3>
                    <Badge variant="secondary" className="flex-shrink-0">
                      {record.confidence}% confident
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{record.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {dummyRecords.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">No records yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Start analyzing fish images to see your history here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Records;
