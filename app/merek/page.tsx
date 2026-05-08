"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link untuk navigasi
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MerekPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const brandData = [
    {
      id: 1,
      name: "Apple",
      logo: "",
      slogan: "Designed in California",
      category: "Eksklusif",
      description: "Mendefinisikan ulang kesempurnaan melalui ekosistem yang intim dan desain yang melampaui zaman.",
      features: ["Retina Display", "A-Series Bionic", "Eco-Friendly"],
      color: "from-zinc-800 to-black",
      accent: "bg-zinc-900"
    },
    {
      id: 2,
      name: "Samsung",
      logo: "SAMSUNG",
      slogan: "The Next Big Thing",
      category: "Inovatif",
      description: "Pelopor layar lipat dunia yang menghadirkan masa depan tepat di genggaman tanganmu hari ini.",
      features: ["Dynamic AMOLED", "Galaxy AI", "S-Pen Support"],
      color: "from-blue-900 to-[#030e22]",
      accent: "bg-[#1428a0]"
    },
    {
      id: 3,
      name: "Xiaomi",
      logo: "mi",
      slogan: "Simply Brilliant",
      category: "Premium",
      description: "Kolaborasi optik legendaris Leica bertemu dengan performa buas untuk standar baru fotografi seluler.",
      features: ["Leica Optics", "HyperCharge", "Snapdragon Elite"],
      color: "from-orange-600 to-[#b34700]",
      accent: "bg-[#ff6700]"
    }
  ];

  const filteredBrands = activeFilter === "Semua" 
    ? brandData 
    : brandData.filter(b => b.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col font-sans selection:bg-[#c5a877] selection:text-white text-gray-900">
      {/* Header dengan Filter yang dipindahkan ke atas */}
      <Header 
  onSearch={(q) => console.log(q)} 
  showFilters={true}
  activeFilter={activeFilter}
  setActiveFilter={setActiveFilter}
/>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#c5a877] uppercase mb-6 bg-[#c5a877]/10 px-4 py-1.5 rounded-full">
              Global Partners
            </span>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-center mb-8">
              Arsitektur <span className="font-serif italic text-[#c5a877]">Inovasi</span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl text-center leading-relaxed italic">
              "Di balik setiap perangkat hebat, terdapat visi yang berani. Kami mengurasi hanya mereka yang berani menantang batasan."
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[20vw] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase opacity-40">
          Brands
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto w-full px-8 py-24">
        <div className="grid grid-cols-1 gap-24">
          {filteredBrands.map((brand, index) => (
            <div 
              key={brand.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 group transition-all duration-1000 animate-in fade-in slide-in-from-bottom-10`}
            >
              {/* Brand Visual Display */}
              <div className="w-full md:w-1/2 aspect-video relative rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-95`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-bold text-white/20 tracking-tighter transition-all duration-700 group-hover:scale-110 group-hover:text-white/40">
                    {brand.logo}
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 flex gap-2">
                  {brand.features.map(feat => (
                    <span key={feat} className="text-[8px] tracking-widest uppercase bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brand Textual Info */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                   <div className="h-px w-8 bg-[#c5a877]"></div>
                   <span className="text-[10px] font-bold text-[#c5a877] tracking-[0.3em] uppercase">{brand.category}</span>
                </div>
                <h3 className="text-4xl font-light tracking-tight">{brand.name}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-lg italic">
                  "{brand.description}"
                </p>
                <div className="pt-4">
                  {/* Tombol yang sekarang berfungsi sebagai navigasi */}
                  <Link 
                    href={`/merek/${brand.name.toLowerCase()}`}
                    className="group/btn inline-flex items-center space-x-4 text-xs font-bold tracking-[0.2em] uppercase cursor-pointer"
                  >
                    <span className="border-b-2 border-gray-200 group-hover/btn:border-[#c5a877] transition-all pb-1">
                      Lihat Katalog {brand.name}
                    </span>
                    <div className={`w-10 h-10 ${brand.accent} text-white rounded-full flex items-center justify-center transform group-hover/btn:translate-x-2 transition-transform shadow-lg`}>
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                       </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}