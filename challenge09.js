import { produits } from "./challenges.js";


// Avec every(), vérifie que tous les prix sont strictement positifs, puis que tous les stocks sont strictement positifs.

console.log(produits.every(ele => ele.prix > 0))

console.log(produits.every(ele => ele.stock > 0))