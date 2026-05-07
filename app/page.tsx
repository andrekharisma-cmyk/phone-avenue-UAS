"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function Home() {
  const [cartCount, setCartCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Menyimpan kata kunci pencarian

  const products = [
    { id: 1, brand: "Apple", name: "iPhone 15 Pro Max", price: "Rp 16,990,000", oldPrice: "Rp 18,000,000", rating: "4.9/5", tag: "Premium" },
    { id: 2, brand: "Samsung", name: "Galaxy S24 Ultra", price: "Rp 15,990,000", oldPrice: "Rp 18,000,000", rating: "4.8/5", tag: "Premium" },
    { id: 3, brand: "Samsung", name: "Galaxy Z Fold 5", price: "Rp 15,990,000", oldPrice: "Rp 18,000,000", rating: "4.6/5", tag: "Premium" },
    { id: 4, brand: "Xiaomi", name: "Xiaomi 14 Pro Series", price: "Rp 10,990,000", oldPrice: "Rp 12,000,000", rating: "4.8/5", tag: "Xiaomi" },
  ];

  // LOGIKA PENCARIAN: Filter produk berdasarkan nama atau brand
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans relative overflow-x-hidden">
      <Header cartCount={cartCount} onSearch={(query) => setSearchQuery(query)} />

      {/* Hero Banner (Hanya muncul jika tidak sedang mencari) */}
      {searchQuery === "" && (
        <section className="px-8 py-6 animate-in fade-in duration-700">
          <div className="relative w-full h-[320px] bg-[#1c2b3e] rounded-2xl overflow-hidden flex items-center">
            <div className="relative z-10 pl-16 max-w-xl text-white">
              <h2 className="text-4xl font-extrabold mb-2 leading-tight uppercase">Flagship Terbaru.<br/>Garansi Resmi.</h2>
              <p className="text-gray-300 mb-8 text-sm font-light">OtentiKasi Berlapis. Jangan Salah Pilih.</p>
              <button className="bg-[#c5a877] text-[#1c2b3e] font-bold py-2.5 px-8 rounded-full text-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">BELI SEKARANG</button>
            </div>
            <div className="absolute right-0 w-1/2 flex justify-center text-white/5 italic text-[120px] font-black select-none pointer-events-none">PHONE</div>
          </div>
        </section>
      )}

      {/* Hasil Pencarian / Daftar Produk */}
      <section className="px-8 py-16 max-w-7xl mx-auto min-h-[400px]">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-xl font-bold tracking-[0.2em] mb-2 uppercase">
            {searchQuery !== "" ? `Hasil Pencarian: "${searchQuery}"` : "Trending Sekarang"}
          </h3>
          <div className="h-1 w-12 bg-[#c5a877] rounded-full"></div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                {...product}
                onAddToCart={() => setCartCount(prev => prev + 1)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 font-light italic">Maaf, gawai yang Anda cari tidak ditemukan di lorong Phone Avenue.</p>
          </div>
        )}
      </section>

      {/* ... (Footer & Bagian lainnya tetap) ... */}
      <Footer />
    </main>
  );
}