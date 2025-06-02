const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
const klienci = new Map();

wss.on('connection', (ws) =>{
    console.log('Nowe połączenie');

    ws.on('message', (wiadomosc) => {
        const data = JSON.parse(wiadomosc);

        switch (data.typ) {
            case 'polacz':
                klienci.set(ws, data.nazwa);
                console.log('pol' + data.nazwa);
                const lista = Array.from(klienci.values());
                wyslij({typ: 'lista', klienci: lista});
                break;

            case 'wiadomosc':
                const nadawca = klienci.get(ws);
                const tresc = {
                    typ: 'wiadomosc',
                    nadawca: nadawca,
                    tresc: data.tresc
                };
                wyslij(tresc);
                break;

            case 'rozlacz':
                klienci.delete(ws);
                console.log('roz' + data.nazwa);
                const listax = Array.from(klienci.values());
                wyslij({typ: 'lista', klienci: listax});
                break;

            case 'prywatne':
                const nadawcax = klienci.get(ws);
                const odbiorca = data.odbiorca;
                const trescx = {
                    typ: 'prywatne',
                    nadawca: nadawcax,
                    odbiorca: odbiorca,
                    tresc: data.tresc
                };
                klienci.forEach((nazwa, klient) => {
                    if (nazwa === odbiorca && klient.readyState === WebSocket.OPEN) {
                        klient.send(JSON.stringify(trescx));
                        ws.send(JSON.stringify(trescx));
                    }
                });
                break;

        }

    })

ws.on('close', () => {
    console.log('Połączenie zamknięte');
    klienci.delete(ws);
    const lista = Array.from(klienci.values()); 
    wyslij({typ: 'lista', klienci: lista});
    });

});

    

function wyslij(wiadomosc){
    klienci.forEach((nazwa, klient) => {
        if (klient.readyState === WebSocket.OPEN)
        {
            klient.send(JSON.stringify(wiadomosc));
        }
        
    });
}

console.log('Serwer WebSocket działa na porcie 3000');