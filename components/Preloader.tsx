"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#1c2b3e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "white",
          letterSpacing: "-0.05em",
          textTransform: "uppercase",
        }}
      >
        PHONE{" "}
        <span style={{ color: "#c5a877", fontStyle: "italic" }}>AVENUE</span>
      </h1>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "0.6rem",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          marginTop: "1rem",
        }}
      >
        Loading Premium Experience...
      </p>

      <div
        style={{
          marginTop: "2.5rem",
          width: "12rem",
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#c5a877",
            borderRadius: "9999px",
            animation: "loadingBar 2s ease-in-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loadingBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
