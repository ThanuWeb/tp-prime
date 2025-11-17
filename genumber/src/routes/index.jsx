import React from "react";

export default function HomePage() {
  const goToPrimes = () => {
   
    window.location.href = "/primes";
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-indigo-900">
      <h1 className="text-3xl font-bold bg-indigo-900 ">TP — Générateur de nombres premiers optimisé</h1>

      <div className="mt-6">
        <button
          type="button"
          onClick={goToPrimes}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Aller à la page primes
        </button>
      </div>
    </div>
  );
}