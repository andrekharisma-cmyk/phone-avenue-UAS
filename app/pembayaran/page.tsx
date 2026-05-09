"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "../context/CartContext";

export default function PembayaranPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cc");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
  });

  const isFormValid =
    formData.nama.trim() !== "" &&
    formData.whatsapp.trim() !== "" &&
    formData.alamat.trim() !== "" &&
    cart.length > 0;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const tax = totalPrice * 0.11;
  const grandTotal = totalPrice + tax;

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <Header onSearch={(q) => console.log(q)} />

      <div className="flex-grow max-w-7xl mx-auto w-full px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* SISI KIRI: FORM (DIBUAT LEBIH KONTRAS) */}
          <div className="lg:w-2/3 space-y-20">
            {/* SECTION 01 */}
            <section>
              <div className="flex items-center space-x-6 mb-12">
                <span className="text-5xl font-serif italic text-[#c5a877] opacity-100">
                  01
                </span>
                <h3 className="text-sm font-black tracking-[0.3em] uppercase text-gray-900 border-b-2 border-[#c5a877] pb-1">
                  Informasi Pengiriman
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-900">
                    Nama Lengkap Penerima
                  </label>
                  <input
                    name="nama"
                    onChange={handleInputChange}
                    placeholder="Contoh: Andre Kharisma"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 text-sm focus:border-[#c5a877] focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-900">
                    Nomor WhatsApp
                  </label>
                  <input
                    name="whatsapp"
                    onChange={handleInputChange}
                    placeholder="0812xxxx"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 text-sm focus:border-[#c5a877] focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-900">
                    Alamat Lengkap Tujuan
                  </label>
                  <textarea
                    name="alamat"
                    rows={3}
                    onChange={handleInputChange}
                    placeholder="Jl. Gajah Mada No. 123, Medan..."
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 text-sm focus:border-[#c5a877] focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                  />
                </div>
              </div>
            </section>

            {/* SECTION 02 */}
            <section>
              <div className="flex items-center space-x-6 mb-12">
                <span className="text-5xl font-serif italic text-[#c5a877]">
                  02
                </span>
                <h3 className="text-sm font-black tracking-[0.3em] uppercase text-gray-900 border-b-2 border-[#c5a877] pb-1">
                  Metode Pembayaran
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { id: "cc", label: "Credit Card", icon: "💳" },
                  { id: "va", label: "Bank Transfer", icon: "🏦" },
                  { id: "ew", label: "E-Wallet", icon: "📱" },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${
                      paymentMethod === m.id
                        ? "border-[#c5a877] bg-white shadow-xl scale-105"
                        : "border-gray-100 bg-gray-50 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <span className="text-3xl">{m.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">
                      {m.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* SISI KANAN: RINGKASAN (DIBUAT LEBIH GAHAR) */}
          <div className="lg:w-1/3">
            <div className="sticky top-40 bg-gray-900 rounded-[3rem] p-10 shadow-2xl">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#c5a877] mb-10 border-b border-white/10 pb-4">
                Ringkasan Pesanan
              </h3>

              <div className="space-y-6 mb-10 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start"
                  >
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        Jumlah: {item.quantity}
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-[#c5a877]">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-white/10 pt-8 mb-10">
                <div className="flex justify-between text-[11px] uppercase tracking-widest text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-widest text-gray-400">
                  <span>Pajak PPN (11%)</span>
                  <span className="text-white">
                    Rp {tax.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#c5a877]">
                    Total Akhir
                  </span>
                  <span className="text-2xl font-black text-white tracking-tighter">
                    Rp {grandTotal.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                disabled={!isFormValid || isProcessing}
                className={`w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all ${
                  !isFormValid
                    ? "bg-white/5 text-white/20 cursor-not-allowed"
                    : "bg-[#c5a877] text-gray-900 hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-[#c5a877]/20"
                }`}
              >
                {!isFormValid ? "Lengkapi Data..." : "Konfirmasi Transaksi"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
