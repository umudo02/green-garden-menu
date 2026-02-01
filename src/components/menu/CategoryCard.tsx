import { Link } from "react-router-dom";
import { 
  Utensils, 
  Coffee, 
  GlassWater, 
  Cake, 
  Wind, 
  IceCreamBowl, 
  Cookie,
  ChefHat
} from "lucide-react";
import type { Category } from "@/types/menu";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  utensils: Utensils,
  coffee: Coffee,
  "glass-water": GlassWater,
  cake: Cake,
  wind: Wind,
  "ice-cream-bowl": IceCreamBowl,
  cookie: Cookie,
};

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon || ""] || ChefHat;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-garden transition-all duration-300 hover:shadow-garden-lg hover:-translate-y-1 animate-slide-up">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-garden-mint/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative flex items-center gap-4">
          {/* Icon container */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <IconComponent className="h-7 w-7" />
          </div>
          
          {/* Text content */}
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {category.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Menüyü görüntüle
            </p>
          </div>
          
          {/* Arrow indicator */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
