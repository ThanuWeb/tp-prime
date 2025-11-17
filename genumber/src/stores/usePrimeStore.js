import { create } from "zustand";
import { isPrime } from "../service/verifIsPrime";

/* Ici on crée un petit "store" avec Zustand. Il sert juste à garder un nombre, dire s’il est premier,et gérer comment on affiche les infos.Les fonctions (setNumber, clear, setDisplayMode) permettent de changer ces valeurs facilement dans nos composants React.*/

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
