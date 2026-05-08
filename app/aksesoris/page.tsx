"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '../context/CartContext'; // Import Hook Keranjang Global

export default function AksesorisPage() {
  // HAPUS: const [cartCount, setCartCount] = useState(1);
  const { addToCart } = useCart(); // Inisialisasi fungsi tambah ke keranjang
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [toast, setToast] = useState({ visible: false, message: "" });

  const categories = ["Semua", "Audio", "Power", "Protection", "Wearables"];

  const aksesorisData = [
    {
      id: 101, // Gunakan ID unik yang berbeda dengan produk di beranda jika perlu
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
      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 bg-white border-l-4 border-[#c5a877] shadow-2xl px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-700 z-50 ${toast.visible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}>
        <p className="text-sm font-medium text-gray-700">{toast.message}</p>
      </div>

      {/* Header sekarang tidak butuh cartCount prop karena sudah mengambil dari Context secara internal */}
      <Header 
        onSearch={(q) => showToast(`Mencari aksesoris "${q}"...`)}
        showFilters={true}
        activeFilter={activeCategory}
        setActiveFilter={setActiveCategory}
      />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-8 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="h-px w-20 bg-[#c5a877] mb-8"></div>
          <h1 className="text-6xl md:text-7xl font-extralight tracking-tighter text-center text-gray-900 uppercase">
            Aksesoris <span className="font-serif italic text-[#c5a877]">Kurasi</span>
          </h1>
          <p className="mt-8 text-lg text-gray-400 font-light max-w-2xl text-center leading-relaxed">
            Menyempurnakan fungsionalitas dengan estetika. Setiap elemen dipilih untuk melengkapi gaya hidup digital Anda yang dinamis.
          </p>
        </div>
      </section>

      {/* Grid Produk */}
      <section className="max-w-7xl mx-auto w-full px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className={`aspect-square ${item.color} rounded-[3rem] relative overflow-hidden transition-all duration-700 group-hover:rounded-[1.5rem] shadow-sm group-hover:shadow-xl`}>
                <span className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase text-gray-900 border border-gray-100">
                  {item.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                   <span className="text-3xl font-black uppercase tracking-tighter">{item.category}</span>
                </div>
                
                {/* Action Overlay dengan Logika Context */}
                <div className="absolute inset-0 bg-[#1c2b3e]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <button 
                    onClick={() => {
                      // LOGIKA BARU: Tambahkan ke context global
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        imageBg: item.color,
                        quantity: 1
                      });
                      showToast(`${item.name} telah masuk ke tas.`);
                    }}
                    className="bg-white text-[#1c2b3e] px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                   >
                     Tambah ke Tas
                   </button>
                </div>
              </div>

              <div className="mt-10 space-y-4 px-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-light tracking-tight text-gray-900">{item.name}</h3>
                  <span className="text-lg font-medium text-[#c5a877]">{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed italic">"{item.description}"</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.specs.map(spec => (
                    <span key={spec} className="text-[8px] font-bold tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">{spec}</span>
                  ))}
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