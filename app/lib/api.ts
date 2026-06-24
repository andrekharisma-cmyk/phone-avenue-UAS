const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";

export async function fetchProducts(params?: { brand?: string; category?: string }) {
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const res = await fetch(`${API_BASE}/products${query ? `?${query}` : ""}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Gagal mengambil produk");
  return res.json();
}

export async function fetchProductById(id: number) {
  const res = await fetch(`${API_BASE}/products/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Produk tidak ditemukan");
  return res.json();
}

export async function createOrder(data: {
  nama: string;
  whatsapp: string;
  alamat: string;
  paymentMethod: string;
  totalPrice: number;
}) {
  const res = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order: {
        address: data.alamat,
        phone: data.whatsapp,
        payment_method: data.paymentMethod,
        total_price: data.totalPrice,
        status: "pending",
      },
    }),
  });
  if (!res.ok) throw new Error("Gagal membuat pesanan");
  return res.json();
}