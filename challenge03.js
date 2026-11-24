import { produits } from "./challenges.js"


// Crée un nouveau tableau et copie chaque objet produit avec une boucle et la syntaxe spread.

const nouveauProduits = []

produits.forEach(produit => {
    nouveauProduits.push({...produit})
})

console.log(nouveauProduits)

// Affiche le nom et le stock de chaque produit de la copie.

nouveauProduits.forEach(produit => {
    console.log(produit.nom, produit.stock)
})

// Dans la copie, passe le stock du Stylo à 6, ajoute une Gomme (ID 106, Papeterie, 5 DH, stock 8),puis retire le Sac (ID 104).

nouveauProduits.forEach(produit => {
    if (produit.nom == "Stylo") {
        produit.stock = 6
    }
})


const newProduit = { id: 106, nom: "Gomme", categorie: "Papeterie", prix: 5, stock: 8 }
nouveauProduits.push(newProduit)

console.log(nouveauProduits)