// declaration des variables
let client = "Awa";
let codeDuPlat = 1
let quantitetexte = ("3");
let montantVerse =5000;
let plat;
let prixUnitaire;
// conversion de la quantite en nombre
let quantite = Number(quantitetexte );

// déterminer le plat et son prix
switch (codeDuPlat) {
    case 1:
        plat = "Attieke-Poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        plat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        plat = "Alloco-œuf";
        prixUnitaire = 1000;
        break;
    default:
        prixUnitaire = 0;
        console.log("Plat invalide");
}
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}

let total = calculerTotal(prixUnitaire, quantite);

console.log("Client : " + client);
console.log("Portions commandées :");
for (let i = 1; i <= quantite; i++) {
    console.log("Portion numéro " + i + " : " + plat + " - " + prixUnitaire + " FCFA");
}

console.log("Total à payer : " + total + " FCFA");
console.log("Montant versé : " + montantVerse + " FCFA");

if (montantVerse >= total) {
    console.log("Monnaie à rendre : " + (montantVerse - total) + " FCFA");
    console.log("Montant manquant : 0 FCFA");
} else {
    console.log("Monnaie à rendre : 0 FCFA");
    console.log("Montant manquant : " + (total - montantVerse) + " FCFA");
}
