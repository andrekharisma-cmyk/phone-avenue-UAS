"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PembayaranPage() {
  const [cartCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cc");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleProcessPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans relative selection:bg-[#c5a877] selection:text-white">
      <Header onSearch={(q) => console.log(q)} />
      
      {/* --- REVISI: MODAL SUKSES PREMIUM --- */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-500">
          {/* Background Overlay dengan blur ekstra */}
          <div className="absolute inset-0 bg-[#0a0f16]/90 backdrop-blur-md"></div>
          
          {/* Container Modal */}
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-700">
            {/* Dekorasi Atas */}
            <div className="h-2 bg-gradient-to-r from-[#c5a877] via-[#e2d1b3] to-[#c5a877]"></div>
            
            <div className="p-10 sm:p-14 text-center">
              {/* Icon Checkmark yang Elegan */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-20 h-20 bg-white border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 shadow-xl shadow-green-500/20">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-light tracking-tighter text-gray-900 mb-2">
                Pesanan <span className="font-serif italic text-[#c5a877]">Diterima</span>
              </h2>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-8 font-bold">Ref: PA-243303611325</p>
              
              {/* Ringkasan Singkat di dalam Pop-up */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-10 text-left space-y-3">
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-gray-400 border-b border-gray-200 pb-2 mb-2">
                  <span>Detail Pengiriman</span>
                </div>
                <p className="text-sm text-gray-800 font-medium">...</p>
                <p className="text-xs text-gray-500 leading-relaxed font-light italic">
                  Gawai impianmu akan segera meluncur ke Medan. Kami pastikan pengemasan dilakukan dengan standar proteksi tertinggi.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => window.print()}
                  className="py-4 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black transition-all shadow-lg"
                >
                  Unduh Invoice
                </button>
                <Link 
                  href="/"
                  className="py-4 border-2 border-gray-100 text-gray-400 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#c5a877] hover:text-[#c5a877] transition-all flex items-center justify-center"
                >
                  Selesai
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- BAGIAN KONTEN YANG TETAP DIJAGA --- */}
      <div className={`flex-grow transition-all duration-1000 ${showSuccess ? 'blur-xl opacity-30 scale-90' : ''}`}>
        <div className="max-w-7xl mx-auto w-full px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* BAGIAN 01 & 02: Alamat & Pembayaran (TIDAK DIHAPUS) */}
            <div className="lg:w-2/3 space-y-16">
              
              {/* Alamat Pengiriman */}
              <section>
                <div className="flex items-center space-x-6 mb-10">
                  <span className="text-4xl font-serif italic text-[#c5a877] opacity-40">01</span>
                  <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-900">Informasi Pengiriman</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Nama Penerima</label>
                    <input type="text" defaultValue="" className="w-full bg-white border-b-2 border-gray-100 p-4 text-sm focus:border-[#c5a877] outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Kontak WhatsApp</label>
                    <input type="text" placeholder="+62..." className="w-full bg-white border-b-2 border-gray-100 p-4 text-sm focus:border-[#c5a877] outline-none transition-all font-medium" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Alamat Lengkap</label>
                    <textarea rows={2} defaultValue="" className="w-full bg-white border-b-2 border-gray-100 p-4 text-sm focus:border-[#c5a877] outline-none transition-all resize-none font-medium"></textarea>
                  </div>
                </div>
              </section>

              {/* Metode Pembayaran */}
              <section>
                <div className="flex items-center space-x-6 mb-10">
                  <span className="text-4xl font-serif italic text-[#c5a877] opacity-40">02</span>
                  <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-900">Metode Pembayaran</h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {['cc', 'va', 'ew'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setPaymentMethod(m)}
                      className={`h-32 rounded-[2rem] border-2 flex flex-col items-center justify-center space-y-3 transition-all duration-500 ${
                        paymentMethod === m 
                        ? 'border-[#c5a877] bg-white shadow-xl shadow-[#c5a877]/10 -translate-y-2' 
                        : 'border-gray-50 bg-gray-50/50 grayscale opacity-60 hover:opacity-100'
                      }`}
                    >
                      <span className="text-xl">{m === 'cc' ? '💳' : m === 'va' ? '🏦' : '📱'}</span>
                      <span className="text-[9px] font-black tracking-widest uppercase">{m === 'cc' ? 'Credit Card' : m === 'va' ? 'Bank Transfer' : 'E-Wallet'}</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* RINGKASAN & TOMBOL PROSES */}
            <div className="lg:w-1/3">
              <div className="sticky top-40 bg-[#1c2b3e] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a877]/10 rounded-bl-[100px]"></div>
                <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-[#c5a877] mb-10">Ringkasan Pesanan</h3>
                
                <div className="space-y-6 text-sm mb-10 font-light border-b border-white/5 pb-10">
                   <div className="flex justify-between items-center text-gray-400">
                      <span>Total Produk (1)</span>
                      <span className="text-white font-medium">Rp 16.990.000</span>
                   </div>
                   <div className="flex justify-between items-center text-gray-400">
                      <span>Pajak Terhitung</span>
                      <span className="text-white font-medium">Rp 1.868.900</span>
                   </div>
                </div>

                <div className="flex justify-between items-end mb-12">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Total Akhir</span>
                   <span className="text-3xl font-black text-[#c5a877] tracking-tighter">Rp 18.858.900</span>
                </div>

                <button 
                  onClick={handleProcessPayment}
                  disabled={isProcessing}
                  className={`w-full py-5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl ${
                    isProcessing 
                    ? 'bg-white/10 text-white/30 cursor-wait' 
                    : 'bg-[#c5a877] text-[#1c2b3e] hover:bg-white hover:scale-105 active:scale-95'
                  }`}
                >
                  {isProcessing ? "Verifikasi Keamanan..." : "Konfirmasi Transaksi"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}