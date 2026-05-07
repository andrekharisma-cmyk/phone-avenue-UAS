"use client";

import React from 'react';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih telah menautkan jejakmu bersama kami. Kabar-kabar indah akan segera menyapamu.");
  };

  return (
    <footer className="bg-[#2d3136] text-white pt-16 pb-8 px-12 text-sm border-t-4 border-[#1c2b3e]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h5 className="font-bold mb-4 tracking-wider">Tentang Kami</h5>
          <ul className="space-y-2 text-gray-400 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 tracking-wider">Hubungi Kami</h5>
          <ul className="space-y-2 text-gray-400 font-light">
            <li className="cursor-pointer hover:text-white transition-colors">Home</li>
            <li className="cursor-pointer hover:text-white transition-colors">Karier</li>
            <li className="cursor-pointer hover:text-white transition-colors">Syarat & Ketentuan</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 tracking-wider">Payment</h5>
          <div className="flex space-x-2 opacity-70">
            <div className="w-10 h-6 bg-white rounded text-black text-[8px] flex items-center justify-center font-bold uppercase tracking-tighter">VISA</div>
            <div className="w-10 h-6 bg-white rounded text-black text-[8px] flex items-center justify-center font-bold uppercase tracking-tighter">JCB</div>
            <div className="w-10 h-6 bg-white rounded text-black text-[8px] flex items-center justify-center font-bold uppercase tracking-tighter">BCA</div>
          </div>
          <div className="flex space-x-3 mt-4 text-gray-400">
             <span className="cursor-pointer hover:text-white transition-colors">IG</span>
             <span className="cursor-pointer hover:text-white transition-colors">FB</span>
             <span className="cursor-pointer hover:text-white transition-colors">TW</span>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-4 tracking-wider">Newsletter</h5>
          <form onSubmit={handleSubscribe} className="flex">
            <input type="email" required placeholder="Alamat email..." className="bg-white text-gray-800 px-4 py-2 w-full rounded-l-md focus:outline-none text-xs" />
            <button type="submit" className="bg-[#c5a877] text-white px-4 py-2 rounded-r-md font-bold text-xs hover:bg-[#b09466] transition-colors">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-6 text-xs text-gray-400 font-light text-center">
        © 2024 Phone Avenue. Seluruh Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}