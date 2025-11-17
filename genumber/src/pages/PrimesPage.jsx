import React, { useEffect, useState, useMemo } from "react";
import { usePrimeAlea } from "../hooks/usePrimeAlea";
import { usePrimeStore } from "../stores/usePrimeStore";
import { Button } from "../components/UI/Button";
import { Prime } from "../components/Prime";
import { inputNumberSchema } from "../schemas/numberSchema";

/**
 * Page /primes
  - usePrimeAlea pour récupérer le nombre simulé
  - met à jour le store Zustand depuis un useEffect
  - propose un formulaire pour tester un nombre manuel (Zod)
 */

export default function PrimesPage() {
  const query = usePrimeAlea();

  // on récupère uniquement ce dont on a besoin
  const setNumber = usePrimeStore((s) => s.setNumber);
  const clear = usePrimeStore((s) => s.clear);
  const currentNumber = usePrimeStore((s) => s.current.number);

  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  // Quand le nombre est différent du store, on met à jour le store.
  useEffect(() => {
    if (query.isSuccess && query.data?.number != null) {
      const n = query.data.number;
      // éviter d'appeler setNumber si la valeur est déjà la même
      if (currentNumber !== n) {
        setNumber(n);
      }
    }
    // On ne dépend de query.data?.number pour éviter des re-renders inutiles
  }, [query.data?.number]);

  const handleFetch = async () => {
    setError(null);
    try {
      // refetch déclenche la query ; la mise à jour du store se fera via useEffect ci‑dessus
      await query.refetch();
    } catch (err) {
      setError(err?.message ?? String(err));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const parsed = Number(input);
    if (!Number.isFinite(parsed) || !Number.isInteger(parsed)) {
      setError("Veuillez entrer un entier valide.");
      return;
    }
    try {
      inputNumberSchema.parse({ number: parsed });
      if (currentNumber !== parsed) setNumber(parsed);
      setInput("");
    } catch (zerr) {
      // zod fournit un tableau errors,affiche un message lisible
      const message =
        zerr?.errors?.[0]?.message ??
        (zerr?.message ? String(zerr.message) : "Nombre invalide");
      setError(message);
    }
  };

  const handleClear = () => {
    clear();
    setError(null);
    setInput("");
  };

  const apiErrorMessage = useMemo(() => {
    if (!query.isError) return null;
    // React Query error peut être un Error, un string ou un objet
    const msg =
      (query.error && (query.error.message || String(query.error))) ||
      "Erreur inconnue";
    return msg;
  }, [query.isError, query.error]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Générateur de nombres premiers</h2>

      <div className="mb-4 flex gap-3 items-center">
        <Button onClick={handleFetch} disabled={query.isFetching}>
          Récupérer un nombre aléatoire (API simulée)
        </Button>
        <Button onClick={handleClear} className="bg-gray-600 hover:bg-gray-700">
          Effacer
        </Button>
        {query.isFetching && <span className="text-sm text-gray-500">Chargement...</span>}
      </div>

      {query.isError && (
        <div className="mb-4 p-3 rounded bg-red-50 text-red-700">
          Erreur API : {apiErrorMessage}
        </div>
      )}

      <div className="mb-6">
        <Prime />
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2 font-medium">Proposer un nombre</label>
        <div className="flex gap-2">
          <input
            className="border p-2 rounded flex-1 text-color-black-500 bg-indigo-900"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Entrez un nombre"
            inputMode="numeric"
            
          />
          <Button type="submit">Tester</Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>


    </div>
  );
}