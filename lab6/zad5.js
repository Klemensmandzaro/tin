const osoby = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27]
];
 
const filtrujStarszych = (osoba) => osoba[2] > 20;
 
const starszeOsoby = osoby.filter(filtrujStarszych);
 
console.log('zadanie 5');

let strinn = "";

starszeOsoby.forEach(osoba => strinn+="["+osoba+"]");

console.log(strinn);

starszeOsoby.forEach(osoba => console.log(`[${osoba.join(', ')}]`));