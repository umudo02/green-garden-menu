import { Header } from "@/components/layout/Header";
import { CategoryCard } from "@/components/menu/CategoryCard";
import { useCategories } from "@/hooks/useCategories";
import { Leaf } from "lucide-react";

const Index = () => {
  const { data: categories, isLoading, error } = useCategories();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-garden-mint/10 to-transparent px-4 pb-8 pt-6">
        {/* Decorative elements */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-8 top-16 h-24 w-24 rounded-full bg-garden-mint/20 blur-2xl" />
        
        <div className="relative mx-auto max-w-md text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Dijital Menü
            </span>
          </div>
          
          <h2 className="font-display text-3xl font-bold text-foreground">
            Hoş Geldiniz
          </h2>
          <p className="mt-2 text-muted-foreground">
            Taze lezzetler ve huzurlu anlar için doğru yerdesiniz
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <main className="px-4 pb-8">
        <div className="mx-auto max-w-md">
          <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
            Kategoriler
          </h3>

          {isLoading ? (
            <div className="space-y-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="h-24 animate-pulse rounded-2xl bg-muted"
                />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-xl bg-destructive/10 p-4 text-center text-destructive">
              Kategoriler yüklenirken bir hata oluştu.
            </div>
          ) : (
            <div className="space-y-3">
              {categories?.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-6">
        <div className="mx-auto max-w-md text-center">
          <div className="flex items-center justify-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">
              Green Garden
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2024 Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
