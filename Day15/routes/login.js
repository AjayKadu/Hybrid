const express = require('express');
const app = express.Router();
const mysql = require('mysql2');
const config = require('config');
const jwt = require('jsonwebtoken');

var connectionDetails = {
    host     : config.get("host"),
    user     : config.get("user"),
    password : config.get("password"),
    database : config.get("database"),
    };

app.post("/", (request, response) => {

   var userName = request.body.userName;
   var password = request.body.password;

   var connection = mysql.createConnection(connectionDetails);
   connection.connect();

   var sql = `select * from emp where ename = '${userName}'`;

   var reply = {token : null};

   connection.query(sql, (error,result) => {
           
        if(error == null){

          var user = result[0];
        
          if(user == null || user == undefined){
               response.setHeader("Content-Type", "application/json")
               response.write(JSON.stringify(reply));
               response.end();
               
          }
          else{
               
            if(user.password === password){

                var tokenPaylod = {
                    name : userName,
                    role : "user",
                    category : "jwtToken",
                    isValidUser : true
                };

                var key = config.get("key");

                var tokenValue = jwt.sign(tokenPaylod, key);
                reply.token  = tokenValue;

                response.setHeader("Content-Type", "application/json")
                response.write(JSON.stringify(reply));                

                response.end();
                
            }
            else{

    
                response.setHeader("Content-Type", "application/json")
                response.write(JSON.stringify(reply));
                response.end();

            }

          }
            

        }
        else{
            
            console.log("Something Went wrong");
            console.log(JSON.stringify(error.message));

            response.setHeader("Content-Type", "application/json")
            response.write(JSON.stringify(reply));
            response.end();
            

        }

   });

   connection.end();




} )

module.exports = app;