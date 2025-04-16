const tablicaSlow = ['kotlet', 'kotka', 'koty', 'pies'];
const slowoDoCenzury = 'kot';
 
const cenzuraMasowa = (tablica, slowo) => {
    return tablica.map(element => {
        if (element.includes(slowo)) {
            return element.replace(slowo, '*');
        }
        return element;
    });
};
 
const wynikCenzury = cenzuraMasowa(tablicaSlow, slowoDoCenzury);
 
console.log('zadanie 3');

console.log(wynikCenzury);