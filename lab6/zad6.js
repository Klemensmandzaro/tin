const listaOsob = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27]
];
 
const sformatujOsobe = (osoba) => `${osoba[0]} | ${osoba[1]} | ${osoba[2]}`;
 
const sformatowanaLista = listaOsob.map(sformatujOsobe);
 
console.log('zadanie 6');

sformatowanaLista.forEach(osoba => console.log(`"${osoba}"`));