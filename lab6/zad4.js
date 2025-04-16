const arr = [10, 11, 13, 12, 14, 15];
 
const sortujWedlugReszty = (a, b) => {
    const resztaA = a % 3;
    const resztaB = b % 3;
    return resztaA - resztaB;
};
 
const sorted = [...arr].sort(sortujWedlugReszty);
 
console.log('zadanie 4');

console.log(sorted);