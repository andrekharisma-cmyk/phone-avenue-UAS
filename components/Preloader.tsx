"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 1800);
    const hideTimer = setTimeout(() => setIsVisible(false), 2300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-[#1c2b3e] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-4xl font-black tracking-tighter text-white uppercase animate-pulse">
        Phone <span className="text-[#c5a877] font-serif italic">Avenue</span>
      </h1>
      <p className="text-gray-400 text-[10px] uppercase tracking-[0.6em] mt-4 font-light">
        Loading Premium Experience...
      </p>
      {/* Bar loading */}
      <div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-[#c5a877] rounded-full animate-[loading_1.8s_ease-in-out_forwards]" />
      </div>
    </div>
  );
}