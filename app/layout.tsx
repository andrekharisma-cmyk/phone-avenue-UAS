import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata yang sudah di-update dari gambar
export const metadata: Metadata = {
  title: {
    default: "Phone Avenue - Flagship Terbaru, Garansi Resmi",
    template: "%s | Phone Avenue",
  },
  description:
    "Toko gawai premium terpercaya. iPhone, Samsung, Xiaomi dengan garansi resmi.",
  keywords: [
    "smartphone",
    "iPhone",
    "Samsung",
    "Xiaomi",
    "toko hp",
    "Phone Avenue",
  ],
  authors: [{ name: "Frans Edinata" }],
  openGraph: {
    title: "Phone Avenue",
    description: "Flagship Terbaru. Garansi Resmi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader /> {/* <--- PRELOADER DITAMBAHKAN DI SINI */}
        <AuthProvider>
          {" "}
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </AuthProvider>{" "}
      </body>
    </html>
  );
}