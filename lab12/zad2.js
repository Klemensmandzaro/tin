import fs from 'fs';
import path from 'path';



const akcja = process.argv[2];
const nazwa = process.argv[3];
const sr= process.argv[4];
const sciezka = path.join('files', nazwa);


switch (akcja) {
  case 'open':
    fs.readFile(sciezka, 'utf8', (err, data) => {
      if (err) 
        {
        console.log(`Plik ${nazwa} nie istnieje!`);
        }
        console.log(`${data}`);
    
    });
    break;
  case 'append':
    fs.appendFile(sciezka, sr + '\n', (err) => {   
        if (err) 
        {
            console.log(`Plik ${nazwa} nie istnieje!`);
        }  
        console.log(`zapisano`);  
    });
    break;
  case 'delete':
    fs.unlink(sciezka, (err) => {
        if (err) 
        {
            console.log(`Plik ${nazwa} nie istnieje!`);
        }
        console.log(`usuniete`);
    });
    break;
  default:
    break;
}
