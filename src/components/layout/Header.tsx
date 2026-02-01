import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

interface HeaderProps {
  showBack?: boolean;
  title?: string;
}

export function Header({ showBack, title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-hero px-4 py-4 shadow-lg">
      <div className="mx-auto flex max-w-md items-center justify-between">
        {showBack ? (
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
        )}

        <div className="text-center">
          {title ? (
            <h1 className="font-display text-xl font-semibold text-primary-foreground">
              {title}
            </h1>
          ) : (
            <>
              <h1 className="font-display text-xl font-bold text-primary-foreground">
                Green Garden
              </h1>
              <p className="text-xs text-primary-foreground/80">Cafe & Lounge</p>
            </>
          )}
        </div>

        <Link
          to="/admin"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
