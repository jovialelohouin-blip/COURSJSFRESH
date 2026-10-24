// declaration des variables
let client = "fresh";
let codeDuPlat = 2;
let quantitetexte = ("3");
let montantVerse = 5000;
let plat;
let prixUnitaire;
// conversion de la quantite en nombre
let quantite = Number(quantitetexte );

// déterminer le plat et son prix
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
    default:
        prixUnitaire = 0;
        console.log("Plat invalide");
        process.exit(1);
}
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}

// Vérifier le code du plat et calculer le total
if (codeDuPlat >= 1 && codeDuPlat <= 3) {

    let total = calculerTotal(prixUnitaire, quantite);

    console.log("prix unitaire:"+prixUnitaire+" FCFA");
    console.log("Total: " + total+" FCFA");

}
