class Ocena{
    constructor(przedmiot, wartosc)
    {
        this.przedmiot=przedmiot;
        this.wartosc=wartosc;
    }
}

class Student{
    constructor(imie, nazwisko, oceny=[], srednia)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.srednia=srednia;
        this.oceny=oceny;
    }
}

const studenci = [
    new Student('Jan', 'Kowalski', [
        new Ocena('WPR', 4),
        new Ocena('TIN', 3),
        new Ocena('POJ', 2)
    ],3),
    new Student('Anna', 'Nowak', [
        new Ocena('WPR', 5),
        new Ocena('TIN', 4)
    ],4.5)
];


const container = document.getElementById('studenci');

studenci.forEach(student => {
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = `${student.imie} ${student.nazwisko}`;

    const srodek = document.createElement('div');
    srodek.classList.add('srodek');
    const tabelka= document.createElement('table');
    tabelka.style.borderCollapse='collapse';
    tabelka.style.width='100%';
    const rowek = tabelka.insertRow();

    const jeden = rowek.insertCell();
    const dwa = rowek.insertCell();

    const details = document.createElement('ul');
    details.classList.add('details');

    student.oceny.forEach(o => {
        const listaocen = document.createElement('li');
        listaocen.textContent = `Przedmiot: ${o.przedmiot} - ocena ${o.wartosc}`;
        details.appendChild(listaocen);
    });
    jeden.appendChild(details);
    const srednia = document.createElement('p');
    srednia.textContent=`Srednia = ${student.srednia}`;
    dwa.appendChild(srednia);
    

    header.addEventListener('click', () => {
        srodek.classList.toggle('active');
    });

    studentDiv.appendChild(header);
    srodek.appendChild(tabelka);
    studentDiv.appendChild(srodek);
    container.appendChild(studentDiv);
});
