/**
 * Fonction métier pour vérifier si un entier strictement positif est premier.
 * Complexité optimisée : on teste 2 puis les impairs jusqu'à sqrt(n).
 */

export function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= r; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}