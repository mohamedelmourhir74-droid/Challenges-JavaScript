import { categories } from "./challenges.js";

// Affiche la première catégorie et le nombre initial de catégories.

console.log(categories[0]);
console.log(categories.length)

// Ajoute « Classement » à la fin, puis remplace « Accessoires » par « Bureau ».

categories.push("Classement")
let idexVisee = categories.indexOf("Accessoires")
categories[idexVisee] = "Bureau"

// Retire la dernière catégorie et affiche le tableau final.

categories.pop()
console.log(categories)