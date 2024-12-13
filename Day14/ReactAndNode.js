const express = require('express');
const mysql = require('mysql2');


 const app = express();

 app.use(express.json());

 app.listen(9090, () => { console.log("Server started on 9090....");})

 app.use((request,response, next) => {
       
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods","*");
    next();
 });

 var connectionDetails = {
    host     : 'localhost',
    user     : 'W3_87373_Ajay',
    password : 'manager',
    database : 'Hybrid'

};

 app.get("/employee", (request, response) =>{

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

 app.get("/employee/:emp_id", (request, response) =>{

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

 app.post("/employee", (request, response) => {

   var connection = mysql.createConnection(connectionDetails);
    
   connection.connect();

   console.log(request.body);
   

   var sql = `INSERT INTO emp(ename, empRole, empCity,password) 
   VALUES ('${request.body.ename}', '${request.body.empRole}','${request.body.empCity}','${request.body.password}')`;
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

 app.put("/employee/:emp_id", (request,response) => {

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

 app.delete("/employee/:emp_id", (request,response) => {

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