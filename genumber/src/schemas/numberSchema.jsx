import { z } from "zod";

// Schéma réutilisable pour valider un nombre proposé par l'utilisateur (1 a 1000)
export const inputNumberSchema = z.object({
  number: z.number().min(1).max(1000),
});