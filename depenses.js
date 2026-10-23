const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transportTexteConverti = Number(transportTexte);
const alimentationTexteConverti = Number(alimentationTexte);
const loisirsTexteConverti = Number(loisirsTexte);
// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transportTexteConverti + alimentationTexteConverti + loisirsTexteConverti;
const budgetRestant = budget - totalDepenses;
const budgetRespected = budgetRestant >= 0;//type : boolean;

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Nom : ${nom}`);
console.log(`Budget : ${budget} FCFA`);
console.log(`Transport : ${transportTexteConverti} FCFA`);
console.log(`Alimentation : ${alimentationTexteConverti} FCFA`);
console.log(`Loisirs : ${loisirsTexteConverti} FCFA`);
console.log(`Total : ${totalDepenses} FCFA`);
console.log(`Reste : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);

