"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "../context/CartContext";

export default function PembayaranPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("va");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // State Form
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
  });

  // Validasi: Tombol hanya aktif jika data terisi
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

  // Logika Klik Konfirmasi
  const handleProcessPayment = () => {
    if (!isFormValid) return;

    setIsProcessing(true); // Mulai loading

    // Simulasi proses bank selama 2.5 detik
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true); // Munculkan Modal Sukses
    }, 2500);
  };

  const tax = totalPrice * 0.11;
  const grandTotal = totalPrice + tax;

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans relative">
      <Header onSearch={(q) => console.log(q)} />

      {/* 1. MODAL SUKSES (Muncul setelah klik Konfirmasi) */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0a0f16]/95 backdrop-blur-xl animate-in fade-in duration-700"></div>
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] p-12 text-center shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl animate-bounce">
              ✓
            </div>
            <h2 className="text-3xl font-light tracking-tighter text-gray-900 mb-2">
              Pesanan{" "}
              <span className="font-serif italic text-[#c5a877]">
                Berhasil!
              </span>
            </h2>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
              Terima kasih, {formData.nama}
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-10 text-left space-y-2">
              <p className="text-[10px] font-black uppercase text-[#c5a877] tracking-widest">
                Nomor Invoice:
              </p>
              <p className="text-sm font-bold text-gray-900">
                PA-INV-{Math.floor(Math.random() * 100000)}
              </p>
              <p className="text-[10px] text-gray-400 italic mt-2">
                Instruksi pembayaran telah dikirim ke WhatsApp Anda.
              </p>
            </div>

            <Link
              href="/"
              onClick={() => clearCart()}
              className="block w-full py-5 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}

      {/* 2. TAMPILAN HALAMAN UTAMA */}
      <div
        className={`max-w-7xl mx-auto w-full px-8 py-20 transition-all duration-700 ${showSuccess ? "blur-2xl scale-95 opacity-0" : "opacity-100"}`}
      >
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sisi Kiri: Form */}
          <div className="lg:w-2/3 space-y-20">
            <section>
              <div className="flex items-center space-x-4 mb-12">
                <span className="text-[#c5a877] font-serif italic text-4xl">
                  01
                </span>
                <h3 className="text-xs font-black tracking-[0.4em] uppercase text-gray-900 border-b-2 border-gray-100 pb-2">
                  Informasi Pengiriman
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Nama Lengkap Penerima
                  </label>
                  <input
                    name="nama"
                    type="text"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Frans..."
                    className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-[#c5a877] focus:bg-white transition-all font-medium text-gray-900"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Nomor WhatsApp
                  </label>
                  <input
                    name="whatsapp"
                    type="text"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="08..."
                    className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-[#c5a877] focus:bg-white transition-all font-medium text-gray-900"
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Alamat Lengkap Tujuan
                  </label>
                  <textarea
                    name="alamat"
                    rows={3}
                    value={formData.alamat}
                    onChange={handleInputChange}
                    placeholder="Nama jalan, nomor rumah..."
                    className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-[#c5a877] focus:bg-white transition-all resize-none font-medium text-gray-900"
                  ></textarea>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-12">
                <span className="text-[#c5a877] font-serif italic text-4xl">
                  02
                </span>
                <h3 className="text-xs font-black tracking-[0.4em] uppercase text-gray-900 border-b-2 border-gray-100 pb-2">
                  Metode Pembayaran
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["cc", "va", "ew"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setPaymentMethod(m)}
                    className={`p-8 rounded-[2rem] border-2 transition-all flex flex-col items-center space-y-4 ${paymentMethod === m ? "border-[#c5a877] bg-white shadow-xl shadow-[#c5a877]/10" : "border-gray-50 bg-gray-50/50 grayscale opacity-60 hover:opacity-100"}`}
                  >
                    <span className="text-2xl">
                      {m === "cc" ? "💳" : m === "va" ? "🏦" : "📱"}
                    </span>
                    <span className="text-[9px] font-black tracking-widest uppercase">
                      {m === "cc"
                        ? "Credit Card"
                        : m === "va"
                          ? "Bank Transfer"
                          : "E-Wallet"}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sisi Kanan: Ringkasan & Tombol Konfirmasi */}
          <div className="lg:w-1/3">
            <div className="sticky top-40 bg-[#1c2b3e] text-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c5a877] mb-10 text-center">
                Ringkasan Pesanan
              </h3>

              <div className="space-y-6 mb-10 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b border-white/5 pb-4"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase">
                        {item.name}
                      </p>
                      <p className="text-[9px] text-gray-400 italic">
                        Jumlah: {item.quantity}
                      </p>
                    </div>
                    <p className="text-[10px] font-bold">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6 mb-10">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400">
                  <span>Subtotal</span>
                  <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400">
                  <span>Pajak PPN (11%)</span>
                  <span>Rp {tax.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#c5a877]">
                    Total Akhir
                  </span>
                  <span className="text-2xl font-black">
                    Rp {grandTotal.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                onClick={handleProcessPayment}
                disabled={!isFormValid || isProcessing}
                className={`w-full py-6 rounded-2xl font-black text-[10px] tracking-[0.4em] uppercase transition-all ${
                  !isFormValid || isProcessing
                    ? "bg-white/5 text-white/20 cursor-not-allowed"
                    : "bg-white text-[#1c2b3e] hover:bg-[#c5a877] hover:text-white shadow-xl active:scale-95"
                }`}
              >
                {isProcessing ? "Memproses..." : "Konfirmasi Transaksi"}
              </button>

              {!isFormValid && (
                <p className="text-[8px] text-center mt-6 text-gray-500 tracking-[0.2em] uppercase italic">
                  Harap lengkapi data pengiriman
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
