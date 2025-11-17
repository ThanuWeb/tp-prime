import React from "react";

//Page d'acceuil 
export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-900 text-white p-4">
        <div className="max-w-6xl mx-auto">TP — Générateur de nombres premiers</div>
      </header>

      <main className="max-w-6xl mx-auto py-8">{children}</main>
    </div>
  );
}