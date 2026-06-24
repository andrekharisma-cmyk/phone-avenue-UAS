"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { useCart } from "./context/CartContext";
import { fetchProducts } from "./lib/api";

export default function Home() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts({ category: "smartphone" })
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans relative overflow-x-hidden">
      <Header onSearch={(query) => setSearchQuery(query)} />

      {searchQuery === "" && (
        <section className="px-8 py-6 animate-in fade-in duration-700">
          <div className="relative w-full h-[320px] bg-[#1c2b3e] rounded-2xl overflow-hidden flex items-center shadow-2xl">
            <div className="relative z-10 pl-16 max-w-xl text-white">
              <h2 className="text-4xl font-extrabold mb-2 leading-tight uppercase">
                Flagship Terbaru.
                <br />
                Garansi Resmi.
              </h2>
              <p className="text-gray-300 mb-8 text-sm font-light">
                Otentikasi Berlapis. Jangan Salah Pilih.
              </p>
              <button className="bg-[#c5a877] text-[#1c2b3e] font-bold py-2.5 px-8 rounded-full text-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
                BELI SEKARANG
              </button>
            </div>
            <div className="absolute right-0 w-1/2 flex justify-center text-white/5 italic text-[120px] font-black select-none pointer-events-none">
              PHONE
            </div>
          </div>
        </section>
      )}

      <section className="px-8 py-24 max-w-7xl mx-auto min-h-[400px] relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-20 left-0 w-full pointer-events-none select-none opacity-[0.03] z-0">
          <h2 className="text-[15vw] font-black uppercase leading-none -ml-10">
            Phone Avenue Premium
          </h2>
        </div>

        {/* Judul Section */}
        <div className="relative z-10 flex flex-col items-center mb-20 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c5a877]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#c5a877]">
              Featured
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c5a877]"></div>
          </div>

          <h2 className="text-5xl font-light tracking-tighter text-gray-900 uppercase text-center">
            {searchQuery !== "" ? (
              <>
                Hasil{" "}
                <span className="font-serif italic text-[#c5a877]">
                  Pencarian
                </span>
              </>
            ) : (
              <>
                Trending{" "}
                <span className="font-serif italic text-[#c5a877]">
                  Sekarang
                </span>
              </>
            )}
          </h2>

          {searchQuery !== "" && (
            <p className="text-xs text-gray-400 font-light tracking-widest italic">
              "{searchQuery}"
            </p>
          )}
        </div>

        {/* Produk */}
        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-gray-400 italic animate-pulse">Memuat produk...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: `Rp ${product.price.toLocaleString("id-ID")}`,
                    image: product.image,
                    imageBg: "bg-gray-100",
                    quantity: 1,
                  })
                }
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 font-light italic text-lg">
              Maaf, gawai "{searchQuery}" tidak ditemukan di Phone Avenue.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}