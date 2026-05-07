"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  cartCount: number;
  onSearch: (query: string) => void;
}

export default function Header({ cartCount, onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top Bar Navigasi */}
      <div className="bg-gray-100 text-[11px] text-gray-500 py-2 px-8 flex justify-end space-x-6 tracking-widest uppercase items-center">
        <Link href="/" className="text-[#c5a877] font-bold hover:text-[#b09466] transition-colors">
          Daftar Produk
        </Link>
        <Link href="/merek" className="hover:text-gray-800 transition-colors">Merek</Link>
        <Link href="/aksesoris" className="hover:text-gray-800 transition-colors">Aksesoris</Link>
        <Link href="/pembayaran" className="hover:text-gray-800 transition-colors">Pembayaran</Link>
      </div>

      {/* Main Header */}
      <div className="px-8 py-5 flex items-center justify-between border-b border-gray-100">
        <Link href="/" className="flex-shrink-0 cursor-pointer">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
            Phone Avenue
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
            placeholder="Bisikkan gawai impian yang kau cari..." 
            className="w-full border border-gray-300 rounded-full py-2.5 pl-6 pr-12 focus:outline-none focus:border-[#c5a877] text-sm transition-colors"
          />
          <button 
            onClick={handleSearchSubmit}
            className="absolute right-1 top-1 bottom-1 bg-[#c5a877] text-white rounded-full p-2.5 px-4 flex items-center justify-center hover:bg-[#b09466] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>

        {/* User & Cart */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 cursor-pointer group hover:opacity-80">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 group-hover:text-gray-700">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
              <p className="font-medium text-gray-800 leading-tight">Velu Sina</p>
              <p className="text-[10px] text-gray-500">Kustomer</p>
            </div>
          </div>
          <Link href="/pembayaran" className="relative cursor-pointer hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span className="absolute -top-1.5 -right-1.5 bg-[#c5a877] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
              {cartCount}
            </span>
          </Link>
          <div className="flex items-center space-x-1 border-l pl-4 cursor-pointer hover:opacity-80">
             <div className="w-4 h-3 bg-red-600 relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div></div>
             <span className="font-medium text-gray-700">IDR</span>
          </div>
        </div>
      </div>
    </header>
  );
}