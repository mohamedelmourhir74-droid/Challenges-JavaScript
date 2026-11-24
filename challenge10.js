import { produits } from "./challenges.js";


// Avec filter(), isole les produits de papeterie en stock. Applique ensuite map() et reduce() à cette sélection pour obtenir ses noms et sa valeur totale.

let result = produits.filter(produit => produit.categorie == "Papeterie" && produit.stock > 0)


const arr = []
result.map(ele => arr.push(ele.nom))
console.log(arr)


console.log(`${result.reduce((acc, ele) => acc + (ele.prix * ele.stock),0)} DH`)