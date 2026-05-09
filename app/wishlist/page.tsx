"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#c5a877] selection:text-white">
      <Header onSearch={(q) => console.log(q)} />

      <section className="flex-grow max-w-7xl mx-auto w-full px-8 py-20">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="h-px w-20 bg-red-500 mb-8"></div>
          <h1 className="text-5xl font-extralight tracking-tighter text-gray-900 uppercase">
            Daftar{" "}
            <span className="font-serif italic text-red-500">Keinginan</span>
          </h1>
          <p className="mt-4 text-gray-400 font-light tracking-widest text-[10px] uppercase">
            Barang-barang yang Anda taksir tersimpan rapi di sini
          </p>
        </div>

        {wishlist.length === 0 ? (
          /* State Kosong */
          <div className="flex flex-col items-center justify-center py-20 space-y-8 animate-in fade-in duration-1000">
            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <p className="text-gray-400 font-light italic">
              Belum ada barang yang Anda sukai...
            </p>
            <Link
              href="/aksesoris"
              className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-900 hover:text-white transition-all"
            >
              Mulai Eksplorasi
            </Link>
          </div>
        ) : (
          /* Grid Item Wishlist */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group relative border border-gray-100 rounded-[3rem] p-8 hover:shadow-2xl transition-all duration-700 bg-white"
              >
                {/* Tombol Hapus - z-index tinggi agar tidak tertutup */}
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-8 right-8 text-gray-300 hover:text-red-500 transition-colors z-20 p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Container Gambar Produk */}
                <div
                  className={`aspect-square ${item.color || "bg-gray-50"} rounded-[2.5rem] mb-8 flex items-center justify-center p-12 relative overflow-hidden`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-700 z-10"
                    />
                  ) : (
                    <span className="text-white/20 font-black text-4xl rotate-12">
                      FAVE
                    </span>
                  )}
                </div>

                {/* Detail Informasi */}
                <div className="space-y-2 mb-10 text-center">
                  <h3 className="text-xl font-light tracking-tight text-gray-900 uppercase">
                    {item.name}
                  </h3>
                  <p className="text-[#c5a877] font-bold tracking-widest text-sm">
                    {item.price}
                  </p>
                </div>

                {/* Tombol Aksi */}
                <button
                  onClick={() => {
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image, // Pastikan link gambar ikut dikirim
                      imageBg: item.color,
                      quantity: 1,
                    });
                    // Opsional: Hapus dari wishlist setelah dipindah
                    toggleWishlist(item);
                  }}
                  className="w-full py-5 bg-[#1c2b3e] text-white rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase hover:bg-black transition-all shadow-xl shadow-gray-100"
                >
                  Pindahkan ke Tas
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
