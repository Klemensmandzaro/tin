const cenzura = (zdanie, slowo) => {
    const regex = new RegExp(slowo, 'g');
    return zdanie.replace(regex, '*');
};
 
const zdanie = "Ala ma kota i psa";

const slowo = "kot";

const wynik = cenzura(zdanie, slowo);
 
console.log('zadanie2');


console.log(wynik);