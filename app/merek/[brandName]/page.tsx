"use client";

import React, { use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function KatalogMerekPage({
  params,
}: {
  params: Promise<{ brandName: string }>;
}) {
  // Mengambil nama merek dari URL secara dinamis
  const resolvedParams = use(params);
  const brandTitle = resolvedParams.brandName; // Nama ini harus cocok dengan nama folder
  const { addToCart } = useCart();

  // Database produk yang sudah diperbanyak
  const allProducts = [
    { 
      id: 1, 
      brand: "Apple", 
      name: "iPhone 15 Pro Max", 
      price: "Rp 16,990,000", 
      oldPrice: "Rp 18,000,000", 
      rating: "4.9/5", 
      tag: "Premium", 
      image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg" 
    },
    { 
      id: 2, 
      brand: "Samsung", 
      name: "Galaxy S24 Ultra", 
      price: "Rp 15,990,000", 
      oldPrice: "Rp 18,000,000", 
      rating: "4.8/5", 
      tag: "Premium", 
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/114/MTA-158938197/samsung_samsung_galaxy_s24_ultra_5g_ram_12-256gb_-_garansi_resmi_full03_ghzmsoto.jpg" 
    },
    { 
      id: 3, 
      brand: "Samsung", 
      name: "Galaxy Z Fold 5", 
      price: "Rp 15,990,000", 
      oldPrice: "Rp 18,000,000", 
      rating: "4.6/5", 
      tag: "Premium", 
      image: "https://www.planetgadget.store/media/wysiwyg/blog/post/g/a/galaxy_z_fold_5.jpg" 
    },
    { 
      id: 4, 
      brand: "Xiaomi", 
      name: "Xiaomi 14 Pro Series", 
      price: "Rp 10,990,000", 
      oldPrice: "Rp 12,000,000", 
      rating: "4.8/5", 
      tag: "Xiaomi", 
      image: "https://gizmologi.id/wp-content/uploads/2023/10/Xioami-14-series-860x753.jpg" 
    },
    { 
      id: 5, 
      brand: "Apple", 
      name: "iPhone 14 Pro", 
      price: "Rp 13,999,000", 
      oldPrice: "Rp 15,500,000", 
      rating: "4.7/5", 
      tag: "Sale", 
      image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large_2x.jpg" 
    },
    { 
      id: 6, 
      brand: "Samsung", 
      name: "Galaxy A55 5G", 
      price: "Rp 5,499,000", 
      oldPrice: "Rp 6,000,000", 
      rating: "4.5/5", 
      tag: "Mid-Range", 
      image: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-a556elgaxid/gallery/id-galaxy-a55-5g-sm-a556-sm-a556elgaxid-thumb-539437826" 
    },
    { 
      id: 7, 
      brand: "Xiaomi", 
      name: "Redmi Note 13 Pro+", 
      price: "Rp 4,999,000", 
      oldPrice: "Rp 5,500,000", 
      rating: "4.6/5", 
      tag: "Best Value", 
      image: "https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-plus/M/990c39f8dc36c5e2a9bc7ca8ffe39a0f.png" 
    },
    { 
      id: 8, 
      brand: "Apple", 
      name: "iPhone SE 3rd Gen", 
      price: "Rp 8,499,000", 
      oldPrice: "Rp 9,000,000", 
      rating: "4.4/5", 
      tag: "Compact", 
      image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-220308_Full-Bleed-Image.jpg.large_2x.jpg" 
    },
  ];

  const displayProducts = allProducts.filter(
    (p) => p.brand.toLowerCase() === brandTitle.toLowerCase(),
  );

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <Header onSearch={(q) => console.log(q)} />

      <section className="py-20 px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#c5a877] uppercase mb-4">
            Official Collection
          </span>
          <h1 className="text-5xl font-light tracking-tighter uppercase">
            {brandTitle}{" "}
            <span className="font-serif italic text-[#c5a877]">Avenue</span>
          </h1>
          <div className="h-1 w-12 bg-[#c5a877] mt-6"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto w-full px-8 py-20 flex-grow">
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image, // URL Gambar ditambahkan ke keranjang
                    imageBg: "bg-gray-100",
                    quantity: 1,
                  })
                }
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-gray-400 italic font-light">
              Katalog untuk merek ini sedang dalam perjalanan menuju galeri
              kami.
            </p>
          </div>
        )}
      </section>
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-20">
        <Link
          href="/merek"
          className="flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-[#c5a877] transition-colors uppercase tracking-widest"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span>Kembali ke Galeri Merek</span>
        </Link>
      </div>

      <Footer />
    </main>
  );
}