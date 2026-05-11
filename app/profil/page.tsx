"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext"; // Pastikan Context ini sudah kamu buat

export default function ProfilPage() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#c5a877] selection:text-white">
      {/* Header sudah pintar, tidak perlu kirim cartCount lagi */}
      <Header onSearch={(q) => console.log(q)} />

      <section className="flex-grow max-w-4xl mx-auto w-full px-8 py-20">
        {/* Header Profil */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-32 h-32 rounded-full bg-gray-50 border-2 border-[#c5a877]/20 flex items-center justify-center text-gray-300 shadow-inner">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-light tracking-tighter text-gray-900">
              Halo,{" "}
              <span className="font-serif italic text-[#c5a877]">Frans</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
              VIP Customer • Sejak Mei 2026
            </p>
          </div>
        </div>

        {/* Statistik Aktivitas - Menampilkan jumlah barang nyata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-4">
              Tas Belanja
            </p>
            <h3 className="text-3xl font-light text-gray-900 mb-2">
              {cart.length}{" "}
              <span className="text-sm italic font-serif">Barang</span>
            </h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Produk yang sedang menunggu di tas belanja Anda.
            </p>
          </div>
          <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-4">
              Wishlist Anda
            </p>
            <h3 className="text-3xl font-light text-gray-900 mb-2">
              {wishlist.length}{" "}
              <span className="text-sm italic font-serif">Favorit</span>
            </h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Gawai impian yang telah Anda tandai.
            </p>
          </div>
        </div>

        {/* Pengaturan Akun */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900 mb-8 pb-2 border-b border-gray-100">
            Detail Akun
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Email", value: "frans@phoneavenue.com" },
              { label: "Nomor Telepon", value: "+62 812 3456 7890" },
              {
                label: "Alamat Utama",
                value: "Jl. Gajah Mada, Medan, Sumatera Utara",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-4 px-2 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-gray-900 text-right ml-4">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Aksi - Ditambah suppressHydrationWarning untuk jaga-jaga */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          <button
            suppressHydrationWarning={true}
            className="flex-1 py-5 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all shadow-xl active:scale-95"
          >
            Edit Profil
          </button>
          <button
            suppressHydrationWarning={true}
            className="flex-1 py-5 border-2 border-red-50 px-10 text-red-400 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-red-50 transition-all active:scale-95"
          >
            Keluar Akun
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
