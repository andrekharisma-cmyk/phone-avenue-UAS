"use client";

import { useCart, CartItem } from '../app/context/CartContext';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  // Ambil semua fungsi dan data dari context
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop dengan efek blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Container Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-900">Tas Belanja</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors text-xl">✕</button>
        </div>

        {/* List Barang di Keranjang */}
        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <span className="text-4xl opacity-20">🛍️</span>
              <p className="text-center text-gray-400 italic font-light text-sm">Tas belanja Anda masih kosong.</p>
            </div>
          ) : (
            // Kita berikan tipe (item: CartItem) agar TypeScript tidak protes 'any'
            cart.map((item: CartItem) => (
              <div key={item.id} className="flex gap-6 items-center animate-in fade-in slide-in-from-right-4 duration-300">
                <div className={`w-20 h-20 rounded-2xl ${item.imageBg || 'bg-gray-100'} flex-shrink-0 shadow-inner`}></div>
                <div className="flex-grow">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">{item.name}</h4>
                  <p className="text-xs text-[#c5a877] font-bold mt-1">{item.price}</p>
                  
                  {/* Pengatur Jumlah */}
                  <div className="flex items-center gap-4 mt-3">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)} 
                      className="w-6 h-6 border border-gray-100 rounded-full flex items-center justify-center text-xs hover:bg-gray-50 transition-colors"
                    >-</button>
                    <span className="text-xs font-bold text-gray-700">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)} 
                      className="w-6 h-6 border border-gray-100 rounded-full flex items-center justify-center text-xs hover:bg-gray-50 transition-colors"
                    >+</button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-[9px] text-gray-300 hover:text-red-500 uppercase font-black tracking-widest transition-colors"
                >Hapus</button>
              </div>
            ))
          )}
        </div>

        {/* Bagian Bawah: Total & Checkout */}
        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-gray-50/30 space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Total Estimasi</span>
              <span className="text-xl font-black text-gray-900">Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <button className="w-full py-5 bg-[#1c2b3e] text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all transform active:scale-95 shadow-xl shadow-[#1c2b3e]/20">
              Lanjut ke Pembayaran
            </button>
          </div>
        )}
      </div>
    </div>
  );
}