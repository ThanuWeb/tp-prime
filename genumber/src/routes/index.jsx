import React from "react";

/**
 * Page d'accueil (/)
 */
export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">TP — Générateur de nombres premiers optimisé</h1>
      <p className="mt-4 text-gray-700">
        Ce projet illustre la séparation des responsabilités : Zustand pour le métier, TanStack
        Query pour l'asynchrone, Zod pour la validation, Tailwind pour le style et une architecture
        modulaire.
      </p>

      <div className="mt-6">
        <a href="/primes" className="text-blue-600 underline">
          Aller à la page /primes
        </a>
      </div>
    </div>
  );
}
