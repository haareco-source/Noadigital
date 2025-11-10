import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
