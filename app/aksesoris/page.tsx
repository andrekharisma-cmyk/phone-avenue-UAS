"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AksesorisPage() {
  const [cartCount, setCartCount] = useState(1);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const aksesorisData = [
    {
      id: 1,
      category: "Audio",
      name: "Sonic Echo Pro",
      price: "Rp 3.499.000",
      description: "Kejernihan simfoni tanpa batas dengan peredam kebisingan aktif tercanggih.",
      spec: ["Active Noise Cancelling", "40h Battery Life", "Spatial Audio"],
      imageBg: "bg-zinc-900"
    },
    {
      id: 2,
      category: "Protection",
      name: "Titan Guard Case",
      price: "Rp 599.000",
      description: "Perlindungan tingkat militer dalam balutan silikon lembut yang elegan.",
      spec: ["Drop Tested 3m", "Magsafe Compatible", "Anti-Yellowing"],
      imageBg: "bg-rose-900/10"
    },
    {
      id: 3,
      category: "Power",
      name: "VoltFlow 100W",
      price: "Rp 899.000",
      description: "Pengisian daya super cepat untuk semua perangkat dalam satu genggaman.",
      spec: ["GaN Technology", "Triple Port", "Overheat Protection"],
      imageBg: "bg-blue-900/10"
    }
  ];

  const showToast = (msg: string) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#c5a877] selection:text-white">
      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 bg-white border-l-4 border-[#c5a877] shadow-2xl px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-700 z-50 ${toast.visible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}>
        <p className="text-sm font-medium text-gray-700">{toast.message}</p>
      </div>

      <Header cartCount={cartCount} onSearch={(q) => showToast(`Mencari "${q}"...`)} />
      
      {/* Hero Section: Sophisticated & Clean */}
      <section className="pt-24 pb-16 px-8 text-center bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#c5a877] uppercase mb-4 block">Essential Companions</span>
          <h1 className="text-5xl font-extralight tracking-tighter text-gray-900 mb-6">
            Aksesoris <span className="font-serif italic text-[#c5a877]">Kurasi</span>
          </h1>
          <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto italic">
            "Kesempurnaan bukan saat tidak ada lagi yang bisa ditambah, tapi saat tidak ada lagi yang bisa dikurangi."
          </p>
        </div>
      </section>

      {/* Product Showcase: Professional Grid */}
      <section className="max-w-7xl mx-auto w-full px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aksesorisData.map((item) => (
            <div key={item.id} className="group flex flex-col h-full">
              {/* Visual Container */}
              <div className={`aspect-[4/5] ${item.imageBg} rounded-[2rem] overflow-hidden mb-8 relative transition-transform duration-700 group-hover:scale-[0.98] shadow-sm`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                   <span className="text-4xl font-black text-gray-900 uppercase tracking-tighter">{item.category}</span>
                </div>
                {/* Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <button 
                    onClick={() => {
                      setCartCount(prev => prev + 1);
                      showToast(`${item.name} ditambahkan ke keranjang.`);
                    }}
                    className="bg-white text-gray-900 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                   >
                     Pesan Sekarang
                   </button>
                </div>
              </div>

              {/* Textual Info: Detailed & Professional */}
              <div className="px-2 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-[#c5a877] tracking-[0.2em] uppercase">{item.category}</span>
                    <h3 className="text-2xl font-light tracking-tight mt-1">{item.name}</h3>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{item.price}</span>
                </div>
                
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Specs List: The "Lengkap Detail" part */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {item.spec.map(s => (
                    <div key={s} className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <div className="w-1 h-1 bg-[#c5a877] rounded-full"></div>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="bg-[#1c2b3e] py-24 px-8 mb-20 rounded-[3rem] mx-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
             <h2 className="text-3xl text-white font-light leading-tight mb-6">
               Kualitas yang <br/>
               <span className="italic font-serif text-[#c5a877]">Melampaui Ekspektasi</span>
             </h2>
             <p className="text-gray-400 font-light leading-relaxed mb-8">
               Setiap aksesoris di Phone Avenue telah melewati uji ketahanan dan estetika yang ketat untuk memastikan ia layak menjadi pendamping setia gawai Anda.
             </p>
             <button className="border border-white/20 text-white px-10 py-3 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-[#1c2b3e] transition-all">
               Eksplorasi Teknologi
             </button>
          </div>
          <div className="md:w-1/3 grid grid-cols-2 gap-4">
             <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-white font-bold text-xl mb-1">100%</span>
                <span className="text-[8px] text-gray-500 uppercase tracking-widest text-center">Otentik</span>
             </div>
             <div className="aspect-square bg-[#c5a877] rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-[#1c2b3e] font-bold text-xl mb-1">2th</span>
                <span className="text-[#1c2b3e]/60 text-[8px] uppercase tracking-widest text-center">Garansi</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}