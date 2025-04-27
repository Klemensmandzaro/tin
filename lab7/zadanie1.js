class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    powiekszCeneWyjsciowa() {
        this.cena_wyjsciowa += 1000;
    }

    obnizCeneZaWiek() {
        const aktualnyRok = new Date().getFullYear();
        const wiek = aktualnyRok - this.rok;
        this.cena_koncowa -= wiek * 1000;
    }

    obnizCeneZaPrzebieg() {
        const przebiegi100k = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= przebiegi100k * 10000;
    }

    aktualizujDane(nowyRok, nowyPrzebieg) {
        this.rok = nowyRok;
        this.przebieg = nowyPrzebieg;
        this.cena_koncowa = this.cena_wyjsciowa;
        this.obnizCeneZaWiek();
        this.obnizCeneZaPrzebieg();
    }
}


let tablica = [];

function dopiszDoTablicy(auto) {
    if (auto.cena_wyjsciowa > 10000) {
        tablica.push(auto);
    }
}

function zwiekszRok() {
    for (let auto of tablica) {
        auto.rok += 1;
    }
}


let a1 = new Auto(2024, 100000, 9000);
let a2 = new Auto(2024, 100000, 20000);

dopiszDoTablicy(a1);
dopiszDoTablicy(a2);
zwiekszRok();

console.log(tablica);
