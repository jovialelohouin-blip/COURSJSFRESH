// Type : number[] ; unité de chaque dépense : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// Paramètre : number[] en FCFA ; retour : number en FCFA.
function calculerTotal(depenses) {
  return depenses.reduce((total, depense) => total + depense, 0);
}

// Paramètre : number[] en FCFA ; retour : moyenne en FCFA par jour.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }

  return calculerTotal(depenses) / depenses.length;
}

// Paramètre et résultat : montants en FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((depense) => depense > 2000);
}

// Paramètre : number[] en FCFA ; retour : montant maximal en FCFA.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }

  return Math.max(...depenses);
}

console.log(`Tableau initial avant le tri : ${depensesSemaine.join(", ")} FCFA`);

// Le tri est appliqué à une copie pour conserver le tableau initial.
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);

console.log(`Tableau initial après le tri : ${depensesSemaine.join(", ")} FCFA`);

// Type : number ; unité : FCFA.
const total = calculerTotal(depensesSemaine);
// Type : number ; unité : FCFA par jour.
const moyenne = calculerMoyenne(depensesSemaine);
// Type : number[] ; unité : FCFA.
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine);
// Type : number ; unité : FCFA.
const maximum = trouverMaximum(depensesSemaine);

console.log(`Total : ${total} FCFA`);
console.log(`Moyenne par jour : ${moyenne.toFixed(2)} FCFA`);
console.log(`Dépenses supérieures à 2000 FCFA : ${grossesDepenses.join(", ")} FCFA`);
console.log(`Dépense maximale : ${maximum} FCFA`);
console.log(`Copie triée par ordre croissant : ${depensesTriees.join(", ")} FCFA`);
