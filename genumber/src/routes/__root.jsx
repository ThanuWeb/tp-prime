import React from "react";

/**
 * Layout racine — contient une barre simple
 */
export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white p-4">
        <div className="max-w-6xl mx-auto">TP — Générateur de nombres premiers</div>
      </header>

      <main className="max-w-6xl mx-auto py-8">{children}</main>
    </div>
  );
}