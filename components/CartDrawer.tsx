"use client";

import { useCart, CartItem } from "../app/context/CartContext";
import { useRouter } from "next/navigation"; // 1. Import Router

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter(); // 2. Inisialisasi Router

  if (!isOpen) return null;

  // 3. Fungsi untuk berpindah halaman
  const handleCheckout = () => {
    onClose(); // Tutup laci keranjang dulu
    router.push("/pembayaran"); // Pindah ke halaman pembayaran
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop dengan efek blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Container Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-900">
            Tas Belanja
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        {/* List Barang di Keranjang */}
        <div className="flex-grow overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <span className="text-4xl opacity-20">🛍️</span>
              <p className="text-center text-gray-400 italic font-light text-sm">
                Tas belanja Anda masih kosong.
              </p>
            </div>
          ) : (
            cart.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex gap-6 items-center animate-in fade-in slide-in-from-right-4 duration-300"
              >
                {/* BAGIAN GAMBAR */}
                <div
                  className={`w-20 h-20 rounded-2xl ${item.imageBg || "bg-gray-100"} flex-shrink-0 shadow-inner overflow-hidden flex items-center justify-center p-2`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "";
                        (e.target as HTMLImageElement).alt = "Error";
                      }}
                    />
                  ) : (
                    <span className="text-[8px] text-gray-400 font-black uppercase text-center leading-tight">
                      No
                      <br />
                      Image
                    </span>
                  )}
                </div>

                <div className="flex-grow">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#c5a877] font-bold mt-1">
                    {item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold hover:bg-gray-100 transition-colors"
                    >
                      －
                    </button>
                    <span className="text-xs font-black text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold hover:bg-gray-100 transition-colors"
                    >
                      ＋
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[9px] text-gray-300 hover:text-red-500 uppercase font-black tracking-widest transition-colors self-start mt-1"
                >
                  Hapus
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bagian Bawah: Total & Checkout */}
        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-gray-50/30 space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                Total Estimasi
              </span>
              <span className="text-xl font-black text-gray-900">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>

            {/* 4. Tambahkan onClick ke tombol ini */}
            <button
              onClick={handleCheckout}
              className="w-full py-5 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all transform active:scale-95 shadow-xl shadow-[#1c2b3e]/20"
            >
              Lanjut ke Pembayaran
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
