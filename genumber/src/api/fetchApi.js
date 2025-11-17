import { z } from "zod";

export const numberSchema = z.object({
  number: z.number().min(1).max(50),
});

export async function fetchNumberAlea() {
  // Simule une latence
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Génère un nombre dans la plage 1..50
  const raw = { number: Math.floor(Math.random() * 50) + 1 };

  // Affiche le nombre généré
  console.log("Nombre généré :", raw.number);

  // zod lèvera une exception si la validation échoue
  return numberSchema.parse(raw);
}
