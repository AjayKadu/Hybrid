const httphelper = require('http');

const server = httphelper.createServer((req, res) =>{

    if (req.url == "/books/user") {
        
        var data = [
            {no: 1, name: "Smith", Age: 34},
            {no: 2, name: "Pat", Age: 30},
            {no: 3, name: "Starc", Age: 35},
            {no: 4, name: "Head", Age: 32}
            
        ];

        var dataString = JSON.stringify(data);
        res.setHeader("Content-Type","application/json");
        res.write(dataString);
    }

        else if(req.url == "/about"){

            var message = `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <title>About</title>
                            </head>
                            <body>
    
                                 <H1>Hello Node...</H1>

                            </body>
                            </html>`

                  res.setHeader("Content-Type","text/html");
                  res.write(message);          
        }
        else{


             var erre = `Give Correct Url`

             res.setHeader("Content-Type", "text/plain");
             res.write(erre);




        }
        

   

    res.end();


});

server.listen(9999, ()=> { console.log("Server Started...");
 })
