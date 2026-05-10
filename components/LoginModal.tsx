"use client";

import { useState } from "react";
import { useAuth } from "../app/context/AuthContext";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { login } = useAuth();
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk pesan error

  if (!isOpen) return null;

  const handleLoginProcess = () => {
    // VALIDASI: Cek apakah kolom kosong
    if (nama.trim() === "" || password.trim() === "") {
      setError("Nama dan Password wajib diisi, Andre!");
      return;
    }

    // Jika oke, jalankan login
    setError("");
    login(nama);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      {/* Backdrop yang lebih gelap agar modal menonjol */}
      <div
        className="absolute inset-0 bg-[#0a0f16]/90 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-md rounded-[3rem] p-12 shadow-2xl text-center animate-in zoom-in-95 duration-300">
        <h2 className="text-3xl font-light tracking-tighter mb-2 italic font-serif text-gray-900">
          Phone <span className="text-[#c5a877]">Avenue</span>
        </h2>
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 mb-10">
          Access Your VIP Account
        </p>

        {/* Pesan Error jika kosong */}
        {error && (
          <div className="mb-6 py-2 bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-lg animate-bounce">
            {error}
          </div>
        )}

        <div className="space-y-6 mb-10 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">
              Nama Pengguna
            </label>
            <input
              type="text"
              placeholder="Contoh: Andre Frans"
              value={nama}
              onChange={(e) => {
                setNama(e.target.value);
                if (error) setError(""); // Hapus error saat user mulai mengetik
              }}
              /* PERBAIKAN VISUAL: Warna text & border lebih kontras */
              className="w-full border-2 border-gray-100 bg-gray-50 rounded-full px-6 py-4 outline-none focus:border-[#c5a877] focus:bg-white text-gray-900 placeholder-gray-400 transition-all font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              /* PERBAIKAN VISUAL: Warna text & border lebih kontras */
              className="w-full border-2 border-gray-100 bg-gray-50 rounded-full px-6 py-4 outline-none focus:border-[#c5a877] focus:bg-white text-gray-900 placeholder-gray-400 transition-all font-medium"
            />
          </div>
        </div>

        <button
          onClick={handleLoginProcess}
          className="w-full py-5 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#1c2b3e]/20"
        >
          Masuk Sekarang
        </button>
      </div>
    </div>
  );
}
