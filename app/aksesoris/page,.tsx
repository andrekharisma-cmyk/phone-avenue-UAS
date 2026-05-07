"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AksesorisPage() {
  const [cartCount, setCartCount] = useState(1);
  const handleSearch = (query: string) => alert(`Menelusuri "${query}" di ruang aksesoris...`);

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <Header cartCount={cartCount} onSearch={handleSearch} />
      
      <div className="flex-grow max-w-7xl mx-auto w-full px-8 py-16 flex flex-col items-center justify-center">
        <span className="text-6xl mb-6 text-[#c5a877]/30">🎧</span>
        <h2 className="text-3xl font-light text-gray-900 tracking-widest uppercase text-center mb-4">Aksesoris Pendamping</h2>
        <p className="text-gray-500 font-light text-center max-w-xl">
          Ruang ini sedang kami siapkan untuk menyempurnakan pengalaman gawaimu. Keindahan simfoni suara dan perlindungan elegan akan segera hadir di sini.
        </p>
      </div>

      <Footer />
    </main>
  );
}