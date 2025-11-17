import { useQuery } from "@tanstack/react-query";
import { fetchNumberAlea } from "../api/fetchApi";

export function usePrimeAlea() {
  return useQuery({
    queryKey: ["numberAlea"],
    queryFn: async () => {
      try {
        const res = await fetchNumberAlea(); // fetchNumberAlea peut throw si Zod échoue
        return res; // objet validé { number }
      } catch (err) {
        // améliorer le message d'erreur pour l'UI
        const message = err?.message || "Erreur inconnue lors de la récupération du nombre";
        // lancer l'erreur pour que React Query passe en isError
        throw new Error(`API simulée invalide : ${message}`);
      }
    },
    retry: 0, // évite multiples retries si la validation échoue souvent
  });
}