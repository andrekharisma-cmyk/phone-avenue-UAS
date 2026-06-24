import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merek",
  description: "Jelajahi koleksi merek premium: Apple, Samsung, Xiaomi di Phone Avenue.",
};

export default function MerekLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}