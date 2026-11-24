import { produits } from "./challenges.js";


// Avec find(), récupère le produit d’ID 103. Réessaie avec l’ID 999.

let prod1 = produits.find(produit => produit.id == 103)
console.log(prod1)

let prod2 = produits.find(produit => produit.id == 999)
console.log(prod2)

// Avec findIndex(), récupère la position de ces deux ID dans le tableau.

console.log(produits.findIndex(ele => ele.id == 103))

console.log(produits.findIndex(ele => ele.id == 999))