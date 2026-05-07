"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PembayaranPage() {
  const [cartCount, setCartCount] = useState(1);
  const handleSearch = (query: string) => alert(`Pencarian tidak aktif di halaman pembayaran.`);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header cartCount={cartCount} onSearch={handleSearch} />
      
      <div className="flex-grow max-w-5xl mx-auto w-full px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 tracking-wider mb-8 uppercase border-b border-gray-200 pb-4">Penyelesaian Pesanan</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Detail Pengiriman */}
          <div className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6 text-gray-800">Informasi Pengiriman</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nama Depan" className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#c5a877] focus:ring-1 focus:ring-[#c5a877] outline-none transition-all" />
                <input type="text" placeholder="Nama Belakang" className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#c5a877] focus:ring-1 focus:ring-[#c5a877] outline-none transition-all" />
              </div>
              <input type="text" placeholder="Alamat Lengkap" className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#c5a877] focus:ring-1 focus:ring-[#c5a877] outline-none transition-all" />
              <input type="text" placeholder="Nomor Telepon" className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#c5a877] focus:ring-1 focus:ring-[#c5a877] outline-none transition-all" />
            </div>
          </div>

          {/* Ringkasan Pesanan */}
          <div className="lg:w-1/3">
            <div className="bg-[#1c2b3e] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
              <h3 className="text-lg font-bold mb-6 tracking-wider">Ringkasan</h3>
              
              <div className="space-y-4 mb-6 text-sm font-light text-gray-300 border-b border-white/10 pb-6">
                <div className="flex justify-between items-center">
                  <span>Apple iPhone 15 Pro Max</span>
                  <span className="font-medium text-white">Rp 16.990.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ongkos Kirim</span>
                  <span className="text-[#c5a877] font-medium">Gratis</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold">Total Penuh</span>
                <span className="text-xl font-bold text-[#c5a877]">Rp 16.990.000</span>
              </div>

              <button className="w-full bg-[#c5a877] text-[#1c2b3e] font-bold py-3 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-black/20">
                PROSES PEMBAYARAN
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}