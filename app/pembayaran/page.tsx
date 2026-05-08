"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '../context/CartContext';

export default function PembayaranPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cc");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 1. STATE UNTUK FORM INPUT
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: ""
  });

  // 2. CEK APAKAH FORM SUDAH LENGKAP
  const isFormValid = 
    formData.nama.trim() !== "" && 
    formData.whatsapp.trim() !== "" && 
    formData.alamat.trim() !== "" &&
    cart.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const tax = totalPrice * 0.11;
  const grandTotal = totalPrice + tax;

  const handleProcessPayment = () => {
    if (!isFormValid) return; // Guard clause tambahan

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans relative">
      <Header onSearch={(q) => console.log(q)} />
      
      {/* MODAL SUKSES (Data Dinamis) */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-[#0a0f16]/90 backdrop-blur-md"></div>
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl font-light tracking-tighter text-gray-900 mb-2">
              Pesanan <span className="font-serif italic text-[#c5a877]">Diterima</span>
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 text-left space-y-2">
              <p className="text-[10px] font-black uppercase text-[#c5a877] tracking-widest">Tujuan Pengiriman:</p>
              <p className="text-sm font-bold text-gray-900">{formData.nama}</p>
              <p className="text-xs text-gray-500 italic">{formData.alamat}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => window.print()} className="py-4 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">Invoice</button>
              <Link href="/" onClick={() => clearCart()} className="py-4 border-2 border-gray-100 text-gray-400 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center">Selesai</Link>
            </div>
          </div>
        </div>
      )}

      <div className={`flex-grow transition-all duration-1000 ${showSuccess ? 'blur-xl opacity-30 scale-90' : ''}`}>
        <div className="max-w-7xl mx-auto w-full px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* FORM INPUT DENGAN VALIDASI */}
            <div className="lg:w-2/3 space-y-16">
              <section>
                <div className="flex items-center space-x-6 mb-10">
                  <span className="text-4xl font-serif italic text-[#c5a877] opacity-40">01</span>
                  <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-900">Informasi Pengiriman</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Nama Penerima</label>
                    <input 
                      name="nama"
                      type="text" 
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap..." 
                      className={`w-full bg-white border-b-2 p-4 text-sm outline-none transition-all font-medium ${formData.nama ? 'border-[#c5a877]' : 'border-gray-100'}`} 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Kontak WhatsApp</label>
                    <input 
                      name="whatsapp"
                      type="text" 
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="+62..." 
                      className={`w-full bg-white border-b-2 p-4 text-sm outline-none transition-all font-medium ${formData.whatsapp ? 'border-[#c5a877]' : 'border-gray-100'}`} 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Alamat Lengkap</label>
                    <textarea 
                      name="alamat"
                      rows={2} 
                      value={formData.alamat}
                      onChange={handleInputChange}
                      placeholder="Masukkan alamat pengiriman lengkap..." 
                      className={`w-full bg-white border-b-2 p-4 text-sm outline-none transition-all resize-none font-medium ${formData.alamat ? 'border-[#c5a877]' : 'border-gray-100'}`}
                    ></textarea>
                  </div>
                </div>
              </section>

              {/* Bagian Metode Pembayaran Tetap Sama */}
              <section>
                <div className="flex items-center space-x-6 mb-10">
                  <span className="text-4xl font-serif italic text-[#c5a877] opacity-40">02</span>
                  <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-900">Metode Pembayaran</h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {['cc', 'va', 'ew'].map((m) => (
                    <button key={m} onClick={() => setPaymentMethod(m)} className={`h-32 rounded-[2rem] border-2 flex flex-col items-center justify-center space-y-3 transition-all ${paymentMethod === m ? 'border-[#c5a877] bg-white shadow-xl shadow-[#c5a877]/10 -translate-y-2' : 'border-gray-50 bg-gray-50/50 grayscale opacity-60'}`}>
                      <span className="text-xl">{m === 'cc' ? '💳' : m === 'va' ? '🏦' : '📱'}</span>
                      <span className="text-[9px] font-black tracking-widest uppercase">{m === 'cc' ? 'Credit Card' : m === 'va' ? 'Bank Transfer' : 'E-Wallet'}</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* RINGKASAN & TOMBOL DENGAN LOGIKA DISABLED */}
            <div className="lg:w-1/3">
              <div className="sticky top-40 bg-[#1c2b3e] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a877]/10 rounded-bl-[100px]"></div>
                <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-[#c5a877] mb-10">Ringkasan Pesanan</h3>
                
                {/* Loop items... */}
                <div className="space-y-4 mb-8 border-b border-white/5 pb-8">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400">
                    <span>Total Akhir</span>
                    <span className="text-xl font-black text-[#c5a877]">Rp {grandTotal.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <button 
                  onClick={handleProcessPayment}
                  disabled={!isFormValid || isProcessing}
                  className={`w-full py-5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl ${
                    !isFormValid || isProcessing
                    ? 'bg-white/5 text-white/20 cursor-not-allowed opacity-50' 
                    : 'bg-[#c5a877] text-[#1c2b3e] hover:bg-white hover:scale-105 active:scale-95 shadow-[#c5a877]/20'
                  }`}
                >
                  {!isFormValid ? "Lengkapi Data..." : isProcessing ? "Memproses..." : "Konfirmasi Transaksi"}
                </button>
                {!isFormValid && cart.length > 0 && (
                  <p className="text-[8px] text-center mt-4 text-gray-500 tracking-widest uppercase">Nama, Kontak, dan Alamat wajib diisi</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}