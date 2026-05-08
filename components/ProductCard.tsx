"use client";

import React from 'react';

interface ProductProps {
  brand: string;
  name: string;
  price: string;
  oldPrice: string;
  rating: string;
  tag: string;
  onAddToCart: () => void;
}

export default function ProductCard({ brand, name, price, oldPrice, rating, tag, onAddToCart }: ProductProps) {
  // Logika sederhana untuk menampilkan logo brand
  const renderBrandLogo = () => {
    if (brand === "Apple") return <span className="font-bold text-lg"></span>;
    if (brand === "Samsung") return <span className="font-bold text-[#1428a0] text-sm tracking-tighter uppercase">Samsung</span>;
    if (brand === "Xiaomi") return <span className="font-bold text-[#ff6700] text-xl">mi</span>;
    return <span className="font-bold uppercase text-xs">{brand}</span>;
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white flex flex-col relative group">
      <span className="absolute top-4 left-4 text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-sm border border-gray-200 uppercase tracking-tighter">
        {tag}
      </span>
      <div className="h-10 flex items-center justify-end mb-2">
        {renderBrandLogo()}
      </div>
      <div className="h-40 w-full bg-gray-50 flex items-center justify-center mb-4 rounded-lg group-hover:bg-gray-100 transition-colors cursor-pointer">
         <span className="text-gray-300 text-[10px] uppercase tracking-widest">[Gambar {name}]</span>
      </div>
      <h4 className="font-bold text-gray-800 text-sm mb-1 leading-tight line-clamp-2 cursor-pointer hover:text-[#c5a877]">
        {brand}<br/>{name}
      </h4>
      <div className="flex items-center space-x-1 mb-2">
        <span className="text-yellow-400 text-xs">★</span>
        <span className="text-xs text-gray-500">{rating}</span>
      </div>
      <div className="mb-4">
         <p className="text-[#c5a877] font-bold text-lg">{price}</p>
         <p className="text-xs text-gray-400 line-through">{oldPrice}</p>
      </div>
      
      <button 
        onClick={onAddToCart}
        className="w-full border border-[#c5a877] text-[#c5a877] rounded-full py-2 text-xs font-bold hover:bg-[#c5a877] hover:text-white transition-all transform hover:scale-105 active:scale-95 mt-auto"
      >
        TAMBAH KE KERANJANG
      </button>
    </div>
  );
}
