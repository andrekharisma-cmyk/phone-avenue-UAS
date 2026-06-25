"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MerekPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const brandData = [
    {
      id: 1,
      name: "Apple",
      videoUrl: "https://www.youtube.com/embed/9tgw8M8T2nc", // iPhone 15 Pro Official
      slogan: "Designed in California",
      category: "Eksklusif",
      description:
        "Mendefinisikan ulang kesempurnaan melalui ekosistem yang intim dan desain yang melampaui zaman.",
      features: ["Titanium Design", "A19 Pro Bionic", "Apple Intelligence"],
      color: "from-zinc-900 to-black",
      accent: "bg-zinc-800",
    },
    {
      id: 2,
      name: "Samsung",
      videoUrl: "https://www.youtube.com/embed/sqwjiPpdtAA", // Galaxy S24 Ultra Official
      slogan: "The Next Big Thing",
      category: "Inovatif",
      description:
        "Pelopor layar lipat dunia yang menghadirkan masa depan tepat di genggaman tanganmu hari ini.",
      features: ["Galaxy AI", "Dynamic AMOLED 2X", "S-Pen Experience"],
      color: "from-blue-950 to-black",
      accent: "bg-[#1428a0]",
    },
    {
      id: 3,
      name: "Xiaomi",
      videoUrl: "https://www.youtube.com/embed/dSPOGtBxMds", // Xiaomi 14 Series Official
      slogan: "Simply Brilliant",
      category: "Premium",
      description:
        "Kolaborasi optik legendaris Leica bertemu dengan performa buas untuk standar baru fotografi seluler.",
      features: ["Leica Optics", "HyperCharge 120W", "Snapdragon Elite"],
      color: "from-orange-950 to-black",
      accent: "bg-[#ff6700]",
    },
  ];

  const filteredBrands =
    activeFilter === "Semua"
      ? brandData
      : brandData.filter((b) => b.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#c5a877] selection:text-white">
      <Header
        onSearch={(q) => console.log(q)}
        showFilters={true}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Hero Section - Apple Style */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black tracking-[0.8em] text-[#c5a877] uppercase mb-8">
              The Masters of Craft
            </span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-center mb-10 leading-none">
              Arsitektur{" "}
              <span className="font-serif italic text-[#c5a877]">Inovasi</span>
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl text-center leading-relaxed italic">
              "Menyaksikan visi global melalui lensa teknologi paling mutakhir
              di dunia."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Alternating Video Layout */}
      <section className="max-w-7xl mx-auto w-full px-8 py-24 pb-48">
        <div className="space-y-48">
          {filteredBrands.map((brand, index) => (
            <div
              key={brand.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-20 group`}
            >
              {/* VIDEO CONTAINER */}
              <div className="w-full md:w-1/2 aspect-video relative rounded-[3rem] overflow-hidden bg-zinc-900 shadow-2xl border border-white/5">
                {/* Iframe YouTube dengan Parameter Autoplay & Mute */}
                <iframe
                  src={`${brand.videoUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${brand.videoUrl.split("/").pop()}&rel=0&showinfo=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-[110%] -top-[5%] pointer-events-none scale-110 group-hover:scale-100 transition-transform duration-1000"
                  allow="autoplay; encrypted-media"
                  title={brand.name}
                ></iframe>

                {/* Overlay Pelindung (Mencegah klik YouTube & memberikan gradasi) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Feature Chips di Atas Video */}
                <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                  {brand.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[8px] font-black tracking-widest uppercase bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brand Text Info */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-12 bg-[#c5a877]"></div>
                  <span className="text-[10px] font-black text-[#c5a877] tracking-[0.5em] uppercase">
                    {brand.category} Collection
                  </span>
                </div>

                <h3 className="text-5xl md:text-7xl font-light tracking-tighter">
                  {brand.name}
                </h3>

                <p className="text-gray-400 font-light leading-relaxed text-xl italic max-w-md">
                  "{brand.description}"
                </p>

                <div className="pt-6">
                  <Link
                    href={`/merek/${brand.name.toLowerCase()}`}
                    className="group/btn inline-flex items-center gap-6 cursor-pointer"
                  >
                    <span className="text-xs font-black tracking-[0.4em] uppercase border-b-2 border-white/10 group-hover/btn:border-[#c5a877] transition-all pb-2">
                      Jelajahi {brand.name}
                    </span>
                    <div
                      className={`w-12 h-12 ${brand.accent} text-white rounded-full flex items-center justify-center transform group-hover/btn:translate-x-3 transition-all duration-500 shadow-xl`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
