class Auto{
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa)
    {
        this.rok=rok;
        this.przebieg=przebieg;
        this.cena_wyjsciowa=cena_wyjsciowa;
        this.cena_koncowa=cena_koncowa;
    }
}

const auta = [
    new Auto(2020, 150000, 30000),
    new Auto(2018, 250000, 35000),
    new Auto(2022, 50000, 28000)
];


const tabela = document.createElement('table');
tabela.border = '1';
tabela.style.borderCollapse= 'collapse';

const naglowek = tabela.insertRow();
['Rok', 'Przebieg', 'Cena Wyjściowa', 'Cena Końcowa'].forEach(text => {
    const th = document.createElement('th');
    th.innerText = text;
    naglowek.appendChild(th);
});

auta.forEach(auto => {
    const row = tabela.insertRow();
    row.insertCell().innerText = auto.rok;
    row.insertCell().innerText = auto.przebieg + ' km';
    row.insertCell().innerText = auto.cena_wyjsciowa + ' zł';
    row.insertCell().innerText = auto.cena_koncowa + ' zł';
});

document.getElementById('tabelocha').appendChild(tabela);


