"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function Home() {
  const [cartCount, setCartCount] = useState(1);
  const [toast, setToast] = useState({ visible: false, message: "" });

  // Data produk kita kumpulkan di sini (seperti database sederhana)
  const products = [
    { id: 1, brand: "Apple", name: "iPhone 15 Pro Max", price: "Rp 16,990,000", oldPrice: "Rp 18,000,000", rating: "4.9/5", tag: "Premium" },
    { id: 2, brand: "Samsung", name: "Galaxy S24 Ultra", price: "Rp 15,990,000", oldPrice: "Rp 18,000,000", rating: "4.8/5", tag: "Premium" },
    { id: 3, brand: "Samsung", name: "Galaxy Z Fold 5", price: "Rp 15,990,000", oldPrice: "Rp 18,000,000", rating: "4.6/5", tag: "Premium" },
    { id: 4, brand: "Xiaomi", name: "Xiaomi 14 Pro Series", price: "Rp 10,990,000", oldPrice: "Rp 12,000,000", rating: "4.8/5", tag: "Xiaomi" },
  ];

  const showToast = (msg: string) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  const handleAddToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    showToast(`Sebuah ${productName} telah berlabuh di keranjang impianmu.`);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) showToast(`Menelusuri jejak "${query}" di Phone Avenue...`);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans relative overflow-x-hidden">
      
      {/* Notifikasi Toast */}
      <div className={`fixed bottom-8 right-8 bg-white border-l-4 border-[#c5a877] shadow-xl px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-700 z-50 ${toast.visible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}>
        <div className="bg-[#c5a877]/10 p-2 rounded-full text-[#c5a877]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <p className="text-sm font-medium text-gray-700">{toast.message}</p>
      </div>

      <Header cartCount={cartCount} onSearch={handleSearch} />

      {/* Hero Banner */}
      <section className="px-8 py-6">
        <div className="relative w-full h-[320px] bg-[#1c2b3e] rounded-2xl overflow-hidden flex items-center">
          <div className="relative z-10 pl-16 max-w-xl text-white">
            <h2 className="text-4xl font-extrabold mb-2 leading-tight uppercase">Flagship Terbaru.<br/>Garansi Resmi.</h2>
            <p className="text-gray-300 mb-8 text-sm font-light">OtentiKasi Berlapis. Jangan Salah Pilih.</p>
            <button className="bg-[#c5a877] text-[#1c2b3e] font-bold py-2.5 px-8 rounded-full text-sm hover:bg-white transition-all transform hover:-translate-y-1">BELI SEKARANG</button>
          </div>
          <div className="absolute right-0 w-1/2 flex justify-center text-white/10 italic text-[100px] font-black select-none pointer-events-none">PHONE</div>
        </div>
      </section>

      {/* Merek Section */}
      <section className="px-8 py-10 text-center">
        <h3 className="text-xl font-bold tracking-wider mb-8 uppercase">Pilih Berdasarkan Merek</h3>
        <div className="flex justify-center gap-6">
          {["Apple iPhone", "Samsung Galaxy", "Xiaomi Series"].map((brand) => (
            <div key={brand} className="group cursor-pointer flex flex-col items-center" onClick={() => showToast(`Membuka koleksi ${brand}...`)}>
              <div className="w-64 h-32 bg-gray-200 rounded-xl mb-4 flex items-end justify-center pb-4 shadow-sm group-hover:border-[#c5a877] border-2 border-transparent transition-all overflow-hidden">
                <span className="text-gray-800 font-bold tracking-widest text-lg z-10">{brand.toUpperCase()}</span>
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">Lihat Produk</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product List */}
      <section className="px-8 py-10 max-w-7xl mx-auto">
        <h3 className="text-xl font-bold tracking-wider mb-8 text-center uppercase">Trending Sekarang</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-gray-100 flex justify-center space-x-24 bg-gray-50/50">
        <div className="flex items-center space-x-4"><div className="font-bold text-gray-900 text-sm leading-tight text-center uppercase">Otentikasi<br/>Terjamin</div></div>
        <div className="flex items-center space-x-4"><div className="font-bold text-gray-900 text-sm leading-tight text-center uppercase">Pengiriman<br/>Cepat</div></div>
        <div className="flex items-center space-x-4"><div className="font-bold text-gray-900 text-sm leading-tight text-center uppercase">Support<br/>24/7</div></div>
      </section>

      <Footer />
    </main>
  );
}