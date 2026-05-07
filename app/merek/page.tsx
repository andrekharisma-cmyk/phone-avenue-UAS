"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MerekPage() {
  const [cartCount, setCartCount] = useState(1);
  const handleSearch = (query: string) => alert(`Menelusuri "${query}" di ruang merek...`);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header cartCount={cartCount} onSearch={handleSearch} />
      
      <div className="flex-grow max-w-7xl mx-auto w-full px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 tracking-wider mb-4 uppercase">Eksplorasi Merek</h2>
          <div className="h-px w-24 bg-[#c5a877] mx-auto"></div>
          <p className="mt-6 text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Temukan karakter sejati dari setiap pencipta. Dari keanggunan Apple hingga ketangguhan Samsung, kami merangkai yang terbaik hanya untukmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kartu Apple */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 h-72 cursor-pointer">
             <span className="text-6xl text-gray-300 group-hover:text-gray-900 transition-colors mb-6"></span>
             <h3 className="text-xl font-bold tracking-widest uppercase mb-2">Apple</h3>
             <p className="text-sm text-gray-400 font-light text-center">Inovasi dalam balutan kemewahan absolut.</p>
          </div>
          
          {/* Kartu Samsung */}
          <div className="bg-[#1428a0]/5 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#1428a0]/10 h-72 cursor-pointer">
             <h3 className="text-3xl font-black tracking-tighter text-[#1428a0] opacity-50 group-hover:opacity-100 transition-opacity mb-6 uppercase">Samsung</h3>
             <h3 className="text-xl font-bold tracking-widest uppercase mb-2">Samsung Galaxy</h3>
             <p className="text-sm text-gray-400 font-light text-center">Menembus batas imajinasi teknologi.</p>
          </div>

          {/* Kartu Xiaomi */}
          <div className="bg-[#ff6700]/5 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#ff6700]/10 h-72 cursor-pointer">
             <h3 className="text-5xl font-bold text-[#ff6700] opacity-50 group-hover:opacity-100 transition-opacity mb-6">mi</h3>
             <h3 className="text-xl font-bold tracking-widest uppercase mb-2">Xiaomi</h3>
             <p className="text-sm text-gray-400 font-light text-center">Performa gahar tanpa kompromi.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}