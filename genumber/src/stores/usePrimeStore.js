import {create} from "zustand";
import { isPrime } from "../service/verifIsPrime";

/**
 
Store Zustand orienté métier :
current: { number: number | null, isPrime: boolean | null }
displayMode: "compact" | "full"
actions: setNumber, setDisplayMode, clear
*
Important : ce store ne contient aucune logique réseau ni dépendance à React Query.*/

export const usePrimeStore = create((set) => ({
  current: { number: null, isPrime: null },
  displayMode: "full",
  setNumber: (n) =>
    set(() => {
      const prime = isPrime(n);
      return { current: { number: n, isPrime: prime } };
    }),
  clear: () => set(() => ({ current: { number: null, isPrime: null } })),
  setDisplayMode: (mode) => set(() => ({ displayMode: mode })),
}));