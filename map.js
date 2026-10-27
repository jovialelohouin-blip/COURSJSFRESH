

function factorielle(n){
    if (n<0) return null;
    if (n===0||n===1)return 1;

    let resultat = 1;

    // Multiplie les nombres de 1 à nombre pour calculer sa factorielle.
    for (let i = 1; i <= n; i++) {
        resultat *= i;
    }

    return resultat;
}
const nombres = [-2,3, 6, 5, 10,];
const factorielles = nombres.map(factorielle);

console.log("factorielle:",factorielles);


