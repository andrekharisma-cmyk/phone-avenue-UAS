"use client";

import React from "react";
import { useWishlist } from "../app/context/WishlistContext"; // 1. IMPORT WISHLIST CONTEXT

interface ProductProps {
  id: number; // TAMBAHKAN ID UNTUK LOGIKA WISHLIST
  brand: string;
  name: string;
  price: string;
  oldPrice: string;
  rating: string;
  tag: string;
  image: string;
  onAddToCart: () => void;
}

export default function ProductCard({
  id,
  brand,
  name,
  price,
  oldPrice,
  rating,
  tag,
  image,
  onAddToCart,
}: ProductProps) {
  // 2. GUNAKAN HOOK WISHLIST
  const { toggleWishlist, isInWishlist } = useWishlist();

  const renderBrandLogo = () => {
    if (brand === "Apple") return <span className="font-bold text-lg"></span>;
    if (brand === "Samsung")
      return (
        <span className="font-bold text-[#1428a0] text-sm tracking-tighter uppercase">
          samsung
        </span>
      );
    if (brand === "Xiaomi")
      return <span className="font-bold text-[#ff6700] text-xl">mi</span>;
    return <span className="font-bold uppercase text-xs">{brand}</span>;
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white flex flex-col relative group">
      {/* 3. TOMBOL LOVE (WISHLIST) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist({
            id,
            name,
            price,
            image,
            color: "bg-gray-50", // Warna default background di wishlist
          });
        }}
        className="absolute top-14 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:scale-110 active:scale-90 transition-all border border-gray-100"
      >
        <svg
          className={`w-4 h-4 transition-colors duration-300 ${
            isInWishlist(id) ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
          fill={isInWishlist(id) ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <span className="absolute top-4 left-4 text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-sm border border-gray-200 uppercase tracking-tighter">
        {tag}
      </span>

      <div className="h-10 flex items-center justify-end mb-2">
        {renderBrandLogo()}
      </div>

      <div className="h-40 w-full bg-gray-50 flex items-center justify-center mb-4 rounded-lg group-hover:bg-gray-100 transition-colors cursor-pointer p-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <span className="text-gray-300 text-[10px] uppercase tracking-widest">
            [No Image]
          </span>
        )}
      </div>

      <h4 className="font-bold text-gray-800 text-sm mb-1 leading-tight line-clamp-2 cursor-pointer hover:text-[#c5a877]">
        {brand} {name}
      </h4>

      <div className="flex items-center mb-3">
        <span className="text-yellow-400 text-xs mr-1">★</span>
        <span className="text-gray-400 text-[10px]">{rating}</span>
      </div>

      <div className="mt-auto">
        <p className="text-gray-400 text-[10px] line-through">{oldPrice}</p>
        <p className="font-bold text-gray-900 text-sm mb-4">{price}</p>

        <button
          onClick={onAddToCart}
          className="w-full py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5a877] hover:border-[#c5a877] hover:text-white transition-all"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
