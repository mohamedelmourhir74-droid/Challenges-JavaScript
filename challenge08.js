import { produits } from "./challenges.js";


// Avec some(), vérifie si au moins un produit a un stock égal à 0.

console.log(produits.some(ele => ele.stock == 0))