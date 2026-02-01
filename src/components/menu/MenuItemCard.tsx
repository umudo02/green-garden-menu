import type { MenuItem } from "@/types/menu";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  return (
    <div
      className="animate-slide-up rounded-xl bg-card p-4 shadow-garden transition-all duration-300 hover:shadow-garden-lg"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Image placeholder or actual image */}
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.name}
            className="h-20 w-20 rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-garden-mint/20">
            <span className="text-2xl">🍽️</span>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-foreground truncate">
              {item.name}
            </h3>
            <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
              ₺{item.price.toFixed(2)}
            </span>
          </div>
          
          {item.description && (
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          )}

          {!item.is_available && (
            <span className="mt-2 inline-block rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
              Şu an mevcut değil
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
