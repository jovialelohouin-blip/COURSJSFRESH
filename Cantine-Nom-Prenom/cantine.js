
// declaration des variables
let client = "Awa";
let codeDuPlat = 1
let quantitetexte = ("3");
let montantVerse =5000;
let plat;
let prixUnitaire;
// conversion de la quantite en nombre
let quantite = Number(quantitetexte );
switch (codeDuPlat) {
    case 1:
        prixUnitaire = 1500;
        break;
    case 2:
        prixUnitaire = 2000;
        break;
    case 3:
        prixUnitaire = 1000;
        break;
}

function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}

let total = calculerTotal(prixUnitaire, quantite);
console.log("Prix unitaire: " + prixUnitaire + " FCFA  " )
console.log("Montant total : " + total + "FCFA");
