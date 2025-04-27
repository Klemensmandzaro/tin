class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = [];
        this.srednia = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia.toFixed(2)}.`;
    }

    set oceny(x) {
        if (x instanceof Ocena) {
            this._oceny.push(x);
            this.obliczSrednia();
        }
    }

    get oceny() {
        let komunikat = "";
        for (let ocena of this._oceny) {
            komunikat += `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}. `;
        }
        return komunikat.trim();
    }

    obliczSrednia() {
        if (this._oceny.length === 0) {
            this.srednia = 0;
        } else {
            let suma = this._oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
            this.srednia = suma / this._oceny.length;
        }
    }
}


let s = new Student('Jan', 'Kowalski');
console.log(s.hello());

s.oceny = new Ocena('WPR', 4);
s.oceny = new Ocena('TIN', 3);
s.oceny = new Ocena('POJ', 2);

console.log(s.hello());
console.log(s.oceny);
