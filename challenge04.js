import { produits } from "./challenges.js";


// Avec filter(), garde les produits dont le stock est supérieur à 0.

console.log(produits.filter(produit => produit.stock > 0))

// Fais un deuxième filtre pour garder les produits de la catégorie « Papeterie » dont le stock est supérieur à 0.

console.log(produits.filter(produit => produit.categorie == "Papeterie" && produit.stock > 0))