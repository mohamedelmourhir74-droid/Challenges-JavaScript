import { produits } from "./challenges.js";


// Avec reduce(), calcule le nombre total d’unités disponibles.

console.log(produits.reduce((acc, produit) => acc + produit.stock, 0))

// Avec un second reduce(), calcule la valeur totale du stock. Pour chaque produit, multiplie son prix unitaire par son stock.

console.log(produits.reduce((acc, produit) => acc + (produit.stock * produit.prix), 0))