const fs = require('fs');




var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/' && req.method=== 'GET') { //check the URL of the current request
        
        fs.readFile("plik.txt", 'utf8', function (err, data) { //read file
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('File not found');
                res.end();
            } else {
                // set response header
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                
                // set response content    
                res.write(data);
                res.end();
            }
        });
        
    
    }
    else if (req.url == '/' && req.method === 'POST') { //check the URL of the current request
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            fs.writeFile("plik.txt", body, (err) => { //write file
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('Error writing file');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.write('File saved successfully');
                }
                res.end();
            });
        });
     } 
     else if (req.url == '/' && req.method === 'DELETE') { //check the URL of the current request
        fs.unlink("plik.txt", (err) => { //delete file
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File deleted successfully');
            }
            res.end();
        });

     }
    else
        res.end('Invalid Request!');

});

server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')