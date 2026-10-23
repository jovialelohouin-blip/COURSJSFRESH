
const prix = 50000;
let epargne = 4000;
let semaines = 0;
let totalEpargne = 0;

while (totalEpargne < prix) {
    totalEpargne += epargne;
    semaines++;
}

console.log(`Il faudra ${semaines} semaines pour atteindre le prix de ${prix} avec une épargne hebdomadaire de ${epargne}.`);
