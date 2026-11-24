import { produits } from "./challenges.js";


// Avec map(), crée un tableau qui contient uniquement les noms.

const arr = []
produits.map((produit) => arr.push(produit.nom))
console.log(arr)

// Avec un second map(), crée un tableau d’étiquettes au format « Nom - Prix DH ».

const arr2 = []
produits.map((produit) => arr2.push(`${produit.nom} - ${produit.prix} DH`))
console.log(arr2)