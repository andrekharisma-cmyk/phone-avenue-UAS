"use client";

import { useState } from "react";
import { useAuth } from "../app/context/AuthContext";

export default function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { user, logout, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeSubView, setActiveSubView] = useState("main"); // State untuk pindah menu
  const [tempName, setTempName] = useState(user?.name || "");

  if (!isOpen) return null;

  const handleSave = () => {
    updateUser(tempName);
    setIsEditing(false);
  };

  // Komponen untuk tombol kembali
  const BackButton = () => (
    <button
      onClick={() => setActiveSubView("main")}
      className="mb-6 text-[10px] font-black text-[#c5a877] uppercase tracking-widest flex items-center gap-2"
    >
      ← Kembali ke Menu Utama
    </button>
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#0a0f16]/80 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 min-h-[500px]">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#c5a877] to-[#d4bc91] h-28 w-full flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors h-fit"
          >
            ✕
          </button>
        </div>

        <div className="px-8 sm:px-12 pb-12 pt-4">
          {/* LOGIKA PERPINDAHAN MENU */}
          {activeSubView === "main" && !isEditing && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-end justify-between -mt-16 mb-8">
                <div className="w-24 h-24 rounded-3xl bg-white p-2 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center text-[#c5a877] text-2xl font-black italic">
                    {user?.name.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-light tracking-tighter text-gray-900">
                  {user?.name}
                </h3>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-[10px] font-bold text-[#c5a877] uppercase tracking-widest mt-1"
                >
                  Edit Profil Anda →
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    id: "pesanan",
                    title: "Riwayat Pesanan",
                    icon: "📦",
                    desc: "Cek status pengiriman gawai Anda",
                  },
                  {
                    id: "alamat",
                    title: "Daftar Alamat",
                    icon: "📍",
                    desc: "Atur alamat pengiriman utama",
                  },
                  {
                    id: "voucher",
                    title: "Voucher Saya",
                    icon: "🎟️",
                    desc: "2 Voucher premium tersedia",
                  },
                  {
                    id: "keamanan",
                    title: "Keamanan Akun",
                    icon: "🔒",
                    desc: "Password & Otentikasi",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveSubView(item.id)}
                    className="group flex items-center p-4 rounded-[1.5rem] bg-gray-50 hover:bg-[#c5a877]/10 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm mr-4">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[11px] font-black text-gray-900 uppercase tracking-wider">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                    </div>
                    <span className="text-gray-300">›</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="w-full mt-8 text-red-400 text-[9px] font-bold uppercase tracking-[0.3em] hover:text-red-600 transition-colors text-center"
              >
                Keluar dari Phone Avenue
              </button>
            </div>
          )}

          {/* VIEW: RIWAYAT PESANAN */}
          {activeSubView === "pesanan" && (
            <div className="animate-in slide-in-from-right-4 duration-500">
              <BackButton />
              <h4 className="text-xl font-light mb-6">
                Riwayat{" "}
                <span className="font-serif italic text-[#c5a877]">
                  Pesanan
                </span>
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-[8px] font-black bg-green-100 text-green-600 px-2 py-1 rounded tracking-widest uppercase">
                      Selesai
                    </span>
                    <span className="text-[9px] text-gray-400 font-medium">
                      10 Mei 2026
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-800">
                    iPhone 15 Pro Max - Titanium
                  </p>
                  <p className="text-[10px] text-gray-400">Rp 24.990.000</p>
                </div>
                <p className="text-[10px] text-gray-400 italic text-center py-4">
                  Tidak ada pesanan lainnya...
                </p>
              </div>
            </div>
          )}

          {/* VIEW: DAFTAR ALAMAT */}
          {activeSubView === "alamat" && (
            <div className="animate-in slide-in-from-right-4 duration-500 text-left">
              <BackButton />
              <h4 className="text-xl font-light mb-6">
                Daftar{" "}
                <span className="font-serif italic text-[#c5a877]">Alamat</span>
              </h4>
              <div className="p-5 rounded-2xl border-2 border-[#c5a877]/20 bg-[#c5a877]/5 mb-4">
                <p className="text-[9px] font-black text-[#c5a877] uppercase tracking-widest mb-2">
                  Utama
                </p>
                <p className="text-sm font-bold text-gray-900 mb-1">
                  Rumah Andre
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Jl. Avenue Gawai No. 12, Medan, Sumatera Utara.
                </p>
              </div>
              <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-[9px] font-bold text-gray-400 uppercase tracking-widest hover:border-[#c5a877] hover:text-[#c5a877] transition-all">
                + Tambah Alamat Baru
              </button>
            </div>
          )}

          {/* VIEW: VOUCHER */}
          {activeSubView === "voucher" && (
            <div className="animate-in slide-in-from-right-4 duration-500">
              <BackButton />
              <h4 className="text-xl font-light mb-6">
                Voucher{" "}
                <span className="font-serif italic text-[#c5a877]">Saya</span>
              </h4>
              <div className="space-y-4">
                <div className="flex bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="p-4 bg-[#c5a877] flex items-center justify-center text-2xl">
                    🎟️
                  </div>
                  <div className="p-4">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#c5a877]">
                      Diskon Member Baru
                    </p>
                    <p className="text-xs font-bold uppercase tracking-tighter">
                      Potongan Rp 500.000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: KEAMANAN */}
          {activeSubView === "keamanan" && (
            <div className="animate-in slide-in-from-right-4 duration-500 text-left">
              <BackButton />
              <h4 className="text-xl font-light mb-6">
                Keamanan{" "}
                <span className="font-serif italic text-[#c5a877]">Akun</span>
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <div>
                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-wider">
                      Password
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Terakhir diubah 2 bulan lalu
                    </p>
                  </div>
                  <button className="text-[9px] font-bold text-[#c5a877] uppercase tracking-widest">
                    Ubah
                  </button>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <div>
                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-wider">
                      Otentikasi 2 Faktor
                    </p>
                    <p className="text-[10px] text-red-400">Belum Aktif</p>
                  </div>
                  <button className="text-[9px] font-bold text-[#c5a877] uppercase tracking-widest">
                    Aktifkan
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: EDIT PROFIL */}
          {isEditing && (
            <div className="animate-in fade-in duration-500 text-left mt-4">
              <h4 className="text-xl font-light mb-8">
                Edit{" "}
                <span className="font-serif italic text-[#c5a877]">Profil</span>
              </h4>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full border-b-2 border-[#c5a877] py-3 text-lg font-light outline-none"
                  />
                </div>
                <div className="flex gap-3 pt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 py-4 bg-[#1c2b3e] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-4 border-2 border-gray-100 text-gray-400 rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
