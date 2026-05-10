"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: { name: string; role: string } | null;
  login: (name: string) => void;
  logout: () => void;
  updateUser: (newName: string) => void; // <--- Tambahkan ini
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  // Cek apakah user sudah login sebelumnya (saat refresh halaman)
  useEffect(() => {
    const savedUser = localStorage.getItem("pa_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (name: string) => {
    const userData = { name: name || "Frans", role: "VIP Customer" };
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("pa_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("pa_user");
  };

  // 1. TAMBAHKAN FUNGSI UPDATE USER DISINI
  const updateUser = (newName: string) => {
    if (user) {
      const updatedUser = { ...user, name: newName };
      setUser(updatedUser);
      localStorage.setItem("pa_user", JSON.stringify(updatedUser));
    }
  };

  return (
    // 2. MASUKKAN FUNGSI KE DALAM PROVIDER
    <AuthContext.Provider
      value={{ isLoggedIn, user, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
