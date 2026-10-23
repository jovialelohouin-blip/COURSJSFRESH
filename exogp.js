let age = 11
let prix1 = 1500
let prix2 = 2500
let Moins16Ans = 0
let Plus16Ans = 0
let sommeTotale = 0
let reduction = 500
let newsomme = 0

while (age <= 20) {
    if (age < 16) {
        console.log(`${age}, votre billet coûte ${prix1}`);
        Moins16Ans++;
        sommeTotale += prix1;
    } else {
        console.log(`${age}, votre billet coûte ${prix2}`);
        Plus16Ans++;
        sommeTotale +=prix2;
    }
    if ( age >= 18){
console.log(`${age}, votre billet coûte ${prix2}`);
 newsomme -= reduction;
    }
    age++;
}
console.log(`Somme totale de tous les billets : ${sommeTotale}`);
console.log(`Nombre de billets pour les moins de 16 ans : ${Moins16Ans}`);
console.log(`Nombre de billets pour les 16 ans et plus : ${Plus16Ans}`);

