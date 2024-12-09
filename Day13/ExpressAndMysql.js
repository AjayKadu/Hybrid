const express = require('express');
const mysql = require('mysql2');


 const app = express();

 app.use(express.json());

 app.listen(9090, () => { console.log("Server started on 9090....");})

 app.use((request,response, next) => {
       
    response.setHeader("Access-Control-Allow-Origin", "*");
    next();

 });

 


 var connectionDetails = {
    host     : 'localhost',
    user     : 'W3_87373_Ajay',
    password : 'manager',
    database : 'classworkdb'

}


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


 app.get("/employee/:empno", (request, response) =>{

    var connection =  mysql.createConnection(connectionDetails);

    connection.connect();

    var sql = `Select * from emp where empno=${request.params.empno}`;

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
   

   var sql = `INSERT INTO emp(empno, ename, job, mgr, hire, sal, comm, deptno) 
   VALUES (${request.body.empno}, '${request.body.ename}', '${request.body.job}', 
           ${request.body.mgr}, '${request.body.hire}', '${request.body.sal}', 
           '${request.body.comm}', ${request.body.deptno})`;

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


 app.put("/employee/:empno", (request,response) => {

    var connection = mysql.createConnection(connectionDetails);
    connection.connect();

    var sql = `update emp set ename='${request.body.ename}', job='${request.body.job}', mgr=${request.body.mgr}, hire='${request.body.hire}', sal='${request.body.sal}', comm='${request.body.comm}', deptno=${request.body.deptno} where empno=${request.params.empno}`;
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


 app.delete("/employee/:empno", (request,response) => {

    var connection = mysql.createConnection(connectionDetails);
    connection.connect();

    var sql = `delete from emp where empno=${request.params.empno}`;
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