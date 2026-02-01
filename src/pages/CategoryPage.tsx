import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { useCategories } from "@/hooks/useCategories";
import { useMenuItems } from "@/hooks/useMenuItems";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: categories } = useCategories();
  const category = categories?.find((c) => c.slug === slug);

  const { data: menuItems, isLoading, error } = useMenuItems(category?.id);

  const availableItems = menuItems?.filter((item) => item.is_available) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header showBack title={category?.name || "Kategori"} />

      <main className="px-4 py-6">
        <div className="mx-auto max-w-md">
          {/* Category info */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {availableItems.length > 0
                ? `${availableItems.length} ürün mevcut`
                : "Bu kategoride henüz ürün bulunmuyor"}
            </p>
          </div>

          {/* Menu items */}
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-28 animate-pulse rounded-xl bg-muted"
                />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-xl bg-destructive/10 p-4 text-center text-destructive">
              Ürünler yüklenirken bir hata oluştu.
            </div>
          ) : availableItems.length === 0 ? (
            <div className="rounded-xl bg-muted p-8 text-center">
              <div className="mb-4 text-5xl">🍽️</div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Henüz ürün eklenmemiş
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bu kategoriye ürünler yakında eklenecektir.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {availableItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
