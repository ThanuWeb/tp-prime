import React from "react";
import RootLayout from "./routes/__root";
import HomePage from "./routes/index";
import PrimesRoute from "./routes/primes";

// Ce composant décide simplement quelle page afficher
// en regardant l’URL dans la barre d'adresse.
// Si l'URL est "/", on montre HomePage.
// Si l'URL commence par "/primes", on montre PrimesRoute.
// Ce n'est pas un "vrai" système de routage comme React Router,
// RootLayout sert juste de mise en page autour de la page choisie.


export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  let Page = HomePage;
  if (path.startsWith("/primes")) Page = PrimesRoute;

  return (
    <RootLayout>
      <Page />
    </RootLayout>
  );
}