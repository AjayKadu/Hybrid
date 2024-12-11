const mysql = require('mysql2');
const config = require('config');
const express = require('express');
       
    var app = express.Router();


    var connectionDetails = {
    host     : config.get("host"),
    user     : config.get("user"),
    password : config.get("password"),
    database : config.get("database"),
    };

app.get("/", (request, response) =>{

    var connection =  mysql.createConnection(connectionDetails);

    connection.connect();

    var sql = `Select * from emp`;

    connection.query(sql, (error, result) => {

        response.setHeader("Content-Type", "application/json");

        if(error == null){
                 
            var dataJson = JSON.stringify(result);
            response.write(dataJson);
            response.end();
        }
        else{

            console.log("Something Went Wrong...");
            console.log(error);
            response.end();
            
        }

        connection.end();

    });

 });

 app.get("/:emp_id", (request, response) =>{

    var connection =  mysql.createConnection(connectionDetails);

    connection.connect();

    var sql = `Select * from emp where emp_id=${request.params.emp_id}`;

    connection.query(sql, (error, result) => {

        response.setHeader("Content-Type", "application/json");

        if(error == null){
                 
            var dataJson = JSON.stringify(result);
            response.write(dataJson);
            response.end();
        }
        else{

            console.log("Something Went Wrong...");
            console.log(error);
            response.end();   
        }

    });

    connection.end();

 });

 app.post("/", (request, response) => {

   var connection = mysql.createConnection(connectionDetails);
    
   connection.connect();

   console.log(request.body);
   

   var sql = `INSERT INTO emp(ename, empRole, empCity) 
   VALUES ('${request.body.Name}', '${request.body.Role}','${request.body.City}')`;
         console.log(sql);
           

   connection.query(sql, (error, result) => {

    response.setHeader("content-type", "application/json");
         
    if(error == null){
       
        var dataJson = JSON.stringify(result);
        response.write(dataJson);
        response.end();
    }

    else{

        response.write("Something went wrong...");
        response.write(JSON.stringify(error.message));
        response.end();
    }

    connection.end();

   });  

 });

 app.put("/:emp_id", (request,response) => {

    var connection = mysql.createConnection(connectionDetails);
    connection.connect();

    var sql = `update emp set ename='${request.body.ename}',empRole='${request.body.empRole}', empCity='${request.body.empCity}' where emp_id=${request.params.emp_id}`;
    connection.query(sql, (error,result) => {
             
        if(error == null){

            var dataJson = JSON.stringify(result);
            response.write(dataJson);
            response.end();

        }
        else{
            
            response.write(JSON.stringify(error.message));
            console.log("Something Went wrong...");
            console.log(JSON.stringify(error.message));
            
            response.end();
        }

    });

    connection.end();

 });

 app.delete("/:emp_id", (request,response) => {

    var connection = mysql.createConnection(connectionDetails);
    connection.connect();

    var sql = `delete from emp where emp_id=${request.params.emp_id}`;
    connection.query(sql, (error,result) => {
             
        if(error == null){

            var dataJson = JSON.stringify(result);
            response.write(dataJson);
            response.end();

        }
        else{
            
            response.write(JSON.stringify(error.message));
            console.log("Something Went wrong...");
            response.end();
        }

    });

    connection.end();

 });

 module.exports = app;