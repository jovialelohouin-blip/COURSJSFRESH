
// Déclaration des variables
let client = "Awa";
let codeDuPlat = 12;
let quantiteTexte = "3";
let montantVerse = 4000;
let plat;
let prixUnitaire;
let quantite = Number(quantiteTexte);

if (!Number.isInteger(codeDuPlat) || codeDuPlat < 1 || codeDuPlat > 3) {
    console.log("impossible de passer la commande.");
} else if (!Number.isInteger(quantite)) {
    console.log("impossoible de passer la commande");
} else {
    switch (codeDuPlat) {
        case 1:
            plat = "Attiéké-Poisson";
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
    }

    function calculerTotal(prixUnitaire, quantite) {
        return prixUnitaire * quantite;
    }

    let total = calculerTotal(prixUnitaire, quantite);

    console.log(`Client : ${client}`);
    console.log("Portions commandées :");
    for (let i = 1; i <= quantite; i++) {
        console.log(`Portion numéro ${i} : ${plat} - ${prixUnitaire} FCFA`);
    }
    console.log(`Total à payer : ${total} FCFA`);
    console.log(`Montant versé : ${montantVerse} FCFA`);

    if (montantVerse >= total) {
        console.log(`Monnaie à rendre : ${montantVerse - total} FCFA`);
    } else {
        console.log(`Montant manquant : ${total - montantVerse} FCFA`);
    }
} 