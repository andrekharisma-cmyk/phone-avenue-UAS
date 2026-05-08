"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../app/context/CartContext'; // Import Hook Keranjang
import CartDrawer from './CartDrawer'; // Import Komponen Drawer

interface HeaderProps {
  onSearch: (query: string) => void;
  activeFilter?: string;
  setActiveFilter?: (filter: string) => void;
  showFilters?: boolean;
}

export default function Header({ 
  onSearch, 
  activeFilter = "Semua", 
  setActiveFilter, 
  showFilters = false 
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false); // State untuk buka/tutup keranjang
  const pathname = usePathname();
  const { cart } = useCart(); // Ambil data keranjang dari Context
  
  const filters = ["Semua", "Premium", "Inovatif", "Eksklusif"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Baris Utama: Logo, Search, & User Profile */}
        <div className="px-8 py-6 flex items-center justify-between bg-white">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-black tracking-tighter text-gray-900 uppercase">Phone Avenue</h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-12 relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={handleChange}
              placeholder="Cari gawai impianmu (misal: iPhone, Samsung...)" 
              className="w-full border-2 border-gray-100 rounded-full py-3 pl-8 pr-14 focus:outline-none focus:border-[#c5a877] focus:bg-gray-50/50 text-sm transition-all shadow-sm"
            />
            <div className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#c5a877] text-white rounded-full px-5 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* User & Cart Icons */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#c5a877]/10 group-hover:text-[#c5a877] transition-all">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-xs font-bold text-gray-900 leading-tight">Velu Sina</p>
                <p className="text-[10px] text-gray-400 font-medium">VIP Customer</p>
              </div>
            </div>
            
            {/* Tombol Keranjang yang sekarang bisa diklik */}
            <div 
              onClick={() => setIsCartOpen(true)} 
              className="relative group p-2 cursor-pointer"
            >
              <svg className="w-7 h-7 text-gray-800 group-hover:text-[#c5a877] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span className="absolute top-0 right-0 bg-[#c5a877] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                {cart.length}
              </span>
            </div>
          </div>
        </div>

        {/* Baris Navigasi Utama */}
        <nav className="bg-white border-y border-gray-100 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-center items-center space-x-16 uppercase tracking-[0.25em] font-bold">
            <Link href="/" className={`text-sm transition-all duration-300 hover:text-gray-900 ${isActive('/') ? 'text-[#c5a877] border-b-2 border-[#c5a877] pb-1' : 'text-gray-400'}`}>Beranda</Link>
            <Link href="/merek" className={`text-sm transition-all duration-300 hover:text-gray-900 ${isActive('/merek') ? 'text-[#c5a877] border-b-2 border-[#c5a877] pb-1' : 'text-gray-400'}`}>Merek</Link>
            <Link href="/aksesoris" className={`text-sm transition-all duration-300 hover:text-gray-900 ${isActive('/aksesoris') ? 'text-[#c5a877] border-b-2 border-[#c5a877] pb-1' : 'text-gray-400'}`}>Aksesoris</Link>
            <Link href="/pembayaran" className={`text-sm transition-all duration-300 hover:text-gray-900 ${isActive('/pembayaran') ? 'text-[#c5a877] border-b-2 border-[#c5a877] pb-1' : 'text-gray-400'}`}>Pembayaran</Link>
          </div>
        </nav>

        {/* Baris Kategori Tambahan */}
        {showFilters && setActiveFilter && (
          <div className="bg-gray-50/50 border-b border-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-8 flex justify-center space-x-12">
              {filters.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`text-[10px] tracking-[0.4em] uppercase transition-all duration-500 font-black px-4 py-1 rounded-full ${activeFilter === f ? 'bg-[#c5a877] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>{f}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Tampilkan Laci Keranjang */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}