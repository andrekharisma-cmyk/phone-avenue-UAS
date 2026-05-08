"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '../context/CartContext';

export default function AksesorisPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [toast, setToast] = useState({ visible: false, message: "" });

  // Database Aksesoris - ID harus sinkron dengan halaman detail produk
  const aksesorisData = [
    {
      id: 101,
      category: "Audio",
      name: "Sonic Echo Buds Pro",
      price: "Rp 2.990.000",
      description: "Kejernihan audio hi-res dengan pembatalan bising aktif yang adaptif.",
      specs: ["30h Battery", "IPX4 Water Resistant", "Spatial Audio"],
      tag: "Best Seller",
      color: "bg-zinc-900"
    },
    {
      id: 102,
      category: "Power",
      name: "VoltFlow 65W GaN",
      price: "Rp 750.000",
      description: "Pengisian daya ultra-cepat dalam ukuran saku yang revolusioner.",
      specs: ["Dual USB-C", "GaN Technology", "Travel Ready"],
      tag: "Essential",
      color: "bg-blue-600/10"
    },
    {
      id: 103,
      category: "Protection",
      name: "Carbon Shield Case",
      price: "Rp 450.000",
      description: "Serat karbon asli dengan perlindungan benturan tingkat militer.",
      specs: ["Real Carbon Fiber", "Slim Profile", "Magsafe Sync"],
      tag: "New Arrival",
      color: "bg-emerald-600/10"
    },
    {
      id: 104,
      category: "Wearables",
      name: "Titanium Sport Band",
      price: "Rp 1.200.000",
      description: "Tali jam kelas dirgantara untuk ketangguhan di setiap petualangan.",
      specs: ["Grade 2 Titanium", "Salt-water Resistant", "Breathable Design"],
      tag: "Premium",
      color: "bg-orange-600/10"
    },
    {
      id: 105,
      category: "Audio",
      name: "Avenue Studio Over-Ear",
      price: "Rp 5.499.000",
      description: "Simfoni sempurna antara kenyamanan kulit domba dan akustik premium.",
      specs: ["50mm Drivers", "Lossless Audio", "Lush Padding"],
      tag: "Limited",
      color: "bg-purple-900/20"
    }
  ];

  const showToast = (msg: string) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  const filteredItems = activeCategory === "Semua" 
    ? aksesorisData 
    : aksesorisData.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#c5a877] selection:text-white">
      {/* Notifikasi Toast */}
      <div className={`fixed bottom-8 right-8 bg-white border-l-4 border-[#c5a877] shadow-2xl px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-700 z-50 ${toast.visible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}>
        <p className="text-sm font-medium text-gray-700">{toast.message}</p>
      </div>

      <Header 
        onSearch={(q) => showToast(`Mencari "${q}"...`)}
        showFilters={true}
        activeFilter={activeCategory}
        setActiveFilter={setActiveCategory}
      />
      
      {/* Section Judul */}
      <section className="pt-28 pb-20 px-8 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="h-px w-20 bg-[#c5a877] mb-8"></div>
          <h1 className="text-6xl md:text-7xl font-extralight tracking-tighter text-center text-gray-900 uppercase">
            Aksesoris <span className="font-serif italic text-[#c5a877]">Kurasi</span>
          </h1>
          <p className="mt-8 text-lg text-gray-400 font-light max-w-2xl text-center leading-relaxed">
            Menyempurnakan fungsionalitas dengan estetika. Setiap elemen dipilih untuk melengkapi gaya hidup digital Anda.
          </p>
        </div>
      </section>

      {/* Grid Produk */}
      <section className="max-w-7xl mx-auto w-full px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Wadah Gambar */}
              <div className={`aspect-square ${item.color} rounded-[3rem] relative overflow-hidden transition-all duration-700 group-hover:rounded-[1.5rem] shadow-sm group-hover:shadow-xl`}>
                <span className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase text-gray-900 border border-gray-100">
                  {item.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                   <span className="text-3xl font-black uppercase tracking-tighter">{item.category}</span>
                </div>
                
                {/* Tombol Tambah ke Tas (Overlay) */}
                <div className="absolute inset-0 bg-[#1c2b3e]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <button 
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        imageBg: item.color,
                        quantity: 1
                      });
                      showToast(`${item.name} berhasil ditambahkan.`);
                    }}
                    className="bg-white text-[#1c2b3e] px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                   >
                     Tambah ke Tas
                   </button>
                </div>
              </div>

              {/* Informasi Produk */}
              <div className="mt-10 space-y-4 px-2">
                <div className="flex justify-between items-baseline gap-4">
                  <Link href={`/produk/${item.id}`} className="group/title flex-1">
                    <h3 className="text-2xl font-light tracking-tight text-gray-900 group-hover/title:text-[#c5a877] transition-colors cursor-pointer">
                      {item.name}
                    </h3>
                  </Link>
                  <span className="text-lg font-medium text-[#c5a877] whitespace-nowrap">{item.price}</span>
                </div>
                
                <p className="text-sm text-gray-500 font-light leading-relaxed italic">
                  "{item.description}"
                </p>

                {/* Spesifikasi (Chips) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.specs.map(spec => (
                    <span key={spec} className="text-[8px] font-bold tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* State jika kosong */}
        {filteredItems.length === 0 && (
          <div className="py-40 text-center">
            <h4 className="text-2xl font-light text-gray-300 italic">Koleksi sedang dalam tahap kurasi...</h4>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}