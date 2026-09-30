import { createContext, useContext } from "react";

export type Site = {
  dark: boolean;
  toggleTheme: () => boolean;
  toggleFest: () => boolean;
  showToast: (text: string) => void;
};

export const SiteContext = createContext<Site | null>(null);

export const useSite = () => useContext(SiteContext)!;

/** Scroller til en seksjon med plass til den faste menyen. */
export function go(id: string) {
  const el = document.getElementById(id);
  if (el)
    window.scrollTo({
      top: el.getBoundingClientRect().top + scrollY - 60,
      behavior: "smooth",
    });
}
