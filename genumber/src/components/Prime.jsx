import React, { useMemo } from "react";
import { usePrimeStore } from "../stores/usePrimeStore";

/**
 * Eviter de retourner un objet inline dans le selector pour empêcher des re-renders inutiles.
 */
export function Prime() {
  const current = usePrimeStore((s) => s.current); // <-- retourne la référence stockée

  const display = useMemo(() => {
    if (current.number == null) return { title: "Aucun nombre", subtitle: "" };
    return {
      title: `Nombre: ${current.number}`,
      subtitle: current.isPrime ? "C'est un nombre premier ✅" : "Ce n'est pas un nombre premier ❌",
    };
  }, [current.number, current.isPrime]);

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="text-xl font-semibold">{display.title}</h3>
      <p className="mt-2 text-gray-700">{display.subtitle}</p>
    </div>
  );
}