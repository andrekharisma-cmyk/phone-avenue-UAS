"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/app/context/CartContext';

// Database simulasi (Harus memiliki ID yang sama dengan di halaman katalog)
const allProducts = [
  {
    id: 101,
    name: "Sonic Echo Buds Pro",
    brand: "Avenue Audio",
    price: "Rp 2.990.000",
    imageBg: "bg-zinc-900",
    description: "Kejernihan audio hi-res dengan pembatalan bising aktif yang adaptif. Didesain untuk kenyamanan sepanjang hari.",
    specs: { screen: "H2 Smart Chip", chip: "Bluetooth 5.3", camera: "Triple Mic System", battery: "30h Total Battery" }
  },
  {
    id: 102,
    name: "VoltFlow 65W GaN",
    brand: "Avenue Power",
    price: "Rp 750.000",
    imageBg: "bg-blue-600/10",
    description: "Pengisian daya ultra-cepat dengan teknologi GaN terbaru. Ukuran lebih kecil, daya lebih besar.",
    specs: { screen: "Safety Shield", chip: "GaN Fast Tech", camera: "Dual USB-C Port", battery: "65W Max Output" }
  },
  {
    id: 103,
    name: "Carbon Shield Case",
    brand: "Avenue Protection",
    price: "Rp 450.000",
    imageBg: "bg-emerald-600/10",
    description: "Perlindungan maksimal dengan material serat karbon asli. Ringan namun sangat tangguh.",
    specs: { screen: "Military Grade", chip: "Carbon Fiber", camera: "Raised Edges", battery: "MagSafe Compatible" }
  },
  {
    id: 104,
    name: "Titanium Sport Band",
    brand: "Avenue Wearables",
    price: "Rp 1.200.000",
    imageBg: "bg-orange-600/10",
    description: "Tali jam tangan mewah berbahan titanium. Tahan karat dan sangat ringan di pergelangan tangan.",
    specs: { screen: "Hypoallergenic", chip: "Grade 2 Titanium", camera: "Quick Release", battery: "Salt-water Proof" }
  },
  {
    id: 105,
    name: "Avenue Studio Over-Ear",
    brand: "Avenue Audio",
    price: "Rp 5.499.000",
    imageBg: "bg-purple-900/20",
    description: "Pengalaman audio studio profesional di mana saja. Dilengkapi dengan earcup kulit domba asli.",
    specs: { screen: "40mm Drivers", chip: "Studio Grade", camera: "Voice Isolation", battery: "50h Playback" }
  }
];

export default function DetailProdukPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  // Cari produk berdasarkan ID
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="italic text-gray-400">Produk tidak ditemukan...</p>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageBg: product.imageBg,
      quantity: 1
    });
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <Header onSearch={(q) => console.log(q)} />

      {/* Toast Sukses */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase z-50 transition-all duration-500 ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Berhasil ditambahkan ke tas
      </div>

      <section className="flex-grow max-w-7xl mx-auto w-full px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Visual Produk */}
          <div className="lg:w-1/2">
            <div className={`aspect-square ${product.imageBg} rounded-[4rem] shadow-inner flex items-center justify-center`}>
               <span className="text-gray-400/20 font-black text-6xl uppercase tracking-tighter rotate-12">{product.brand}</span>
            </div>
          </div>

          {/* Informasi Produk */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a877]">{product.brand} Collection</h2>
              <h1 className="text-5xl font-light tracking-tighter text-gray-900">{product.name}</h1>
              <p className="text-2xl font-medium text-gray-900">{product.price}</p>
            </div>

            <p className="text-gray-500 font-light leading-relaxed italic text-lg">"{product.description}"</p>

            {/* Spek Detail */}
            <div className="grid grid-cols-2 gap-10 py-10 border-y border-gray-100">
              {[
                { label: "Hardware", val: product.specs.chip },
                { label: "Durability", val: product.specs.camera },
                { label: "Power", val: product.specs.battery },
                { label: "Features", val: product.specs.screen }
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-2">{s.label}</p>
                  <p className="text-xs font-bold text-gray-800">{s.val}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={handleAdd}
              className="w-full py-6 bg-[#1c2b3e] text-white rounded-[2rem] font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-black transition-all shadow-2xl"
            >
              Tambahkan ke Tas Belanja
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}