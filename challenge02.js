import { boutique } from "./challenges.js"

// Affiche le nom et la ville de la boutique.

console.log(boutique.nom)
console.log(boutique.ville)

// Ajoute la propriété devise avec la valeur "MAD".

boutique.devise = "MAD"

// Passe ouverte à false et affiche le statut « Fermée » à partir de cette valeur.

boutique.ouverte = false

if (boutique.ouverte == true) {
    console.log("statut : Ouverte")
}else {
    console.log("statut : Fermée")
}
