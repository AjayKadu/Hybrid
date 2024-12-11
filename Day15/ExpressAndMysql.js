const express = require('express');
const cors = require('cors');
const config = require('config');
const jwt = require('jsonwebtoken');

var employeeRoutes = require('./routes/employees');
var loginRoutes = require('./routes/login');

const app = express();

app.use(express.json());

var port = config.get("port");

app.listen(port, () => { console.log(`Server started on ${port}....`); });

app.use(cors());

app.use((request, response, next) => {

    if (request.url.includes("login"))
    {
        next();
    }
    else 
    {
        var reply = { "message": "" };
    
        if (request.headers.authorization != null || request.headers.authorization != undefined) 
        {
    
            var key = config.get("key");
    
            var token = request.headers.authorization;
            var tokenPaylod = jwt.verify(token, key);
    
            if (tokenPaylod.isValidUser) {
                next();
            }
            else {
    
                reply.message = "User / Token is invalid!";
                response.setHeader("content-type", "application/json");
                response.write(JSON.stringify(reply));
                response.end();
            }
        }
        else
        {
    
            reply.message = "Token is Required...";
            response.setHeader("content-type", "application/json");
            response.write(JSON.stringify(reply));
            response.end();
    
    
        }
    
    }
    
    });



app.use("/login", loginRoutes);
app.use("/employee", employeeRoutes);