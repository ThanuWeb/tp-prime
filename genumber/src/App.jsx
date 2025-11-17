import React from "react";
import RootLayout from "./routes/__root";
import HomePage from "./routes/index";
import PrimesRoute from "./routes/primes";

/**
 * Pour rester agnostique à la version exacte de TanStack Router,
 * j'expose ici une logique simple de routage "à la main" minimale.
 *
 * Si vous voulez une intégration complète avec @tanstack/react-router,
 * je peux ajuster le RouterProvider selon la version utilisée.
 */

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