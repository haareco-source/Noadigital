import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
          <Link to={link}>Ver más</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
