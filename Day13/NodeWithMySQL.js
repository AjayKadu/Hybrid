const mysql2 = require('mysql2');
    //console.log(mysql);


    // const connectionDetails = {
    //                              host     : 'localhost',
    //                              user     : 'root',
    //                              password : '1234',
    //                              database : 'classworkdb',
    //                          };


    // const connection =  mysql2.createConnection(connectionDetails);

    // connection.connect();

    // var sql = "Select * from emp";

    // connection.query(sql,(error, result)=>{
        
    //     if(error == null){

    //         var dataJson = JSON.stringify(result);
    //         console.log(dataJson);
            

    //     }
    //     else{
          
    //         console.log("Something Went Wrong...");
    //         console.log(error);
            

    //     }

    // });

    // connection.end();




//     var connectionDetails = {
//                                  host     : 'localhost',
//                                  user     : 'W3_87373_Ajay',
//                                  password : 'manager',
//                                  database : 'classworkdb'

//                             }

//    var connection = mysql2.createConnection(connectionDetails);

//    connection.connect();

//    var sql = `insert into emp(empno,ename,job,mgr,hire,sal,comm,deptno) values(7939,'Steve','Salesman',7933,'1930-12-12',2400,200,60)`;
//    console.log(sql);
   

//    connection.query(sql,(error, result) => {
     
//         if(error == null){

//             var dataJson = JSON.stringify(result);
//             console.log(dataJson);
            

//         }
//         else{
//             console.log("Something Went wrong...");
//             console.log(error);
            
            
//         }


//    });

//    connection.end();


//     var connectionDetails = {
//                                  host     : 'localhost',
//                                  user     : 'W3_87373_Ajay',
//                                  password : 'manager',
//                                  database : 'classworkdb'

//                             }

// var connection = mysql2.createConnection(connectionDetails);

// connection.connect();

// var sql = `update emp set ename = 'Pat' where empno = 7939`;

// connection.query(sql, (error, result) => {

//     if(error == null){

//         var dataJson = JSON.stringify(result);
//         console.log(dataJson);
        

//     }
//     else{

//         console.log("Something went wrong...");
//         console.log(error);
        
        
//     }

// });

// connection.end();


var connectionDetails = {
                                     host     : 'localhost',
                                     user     : 'W3_87373_Ajay',
                                     password : 'manager',
                                     database : 'classworkdb'
    
                                }
    



    var connection = mysql2.createConnection(connectionDetails);
    
    connection.connect();
    
    var sql = `delete from emp where empno = 7939`;
    
    connection.query(sql, (error, result) => {
    
        if(error == null){
    
            var dataJson = JSON.stringify(result);
            console.log(dataJson);
            
    
        }
        else{
    
            console.log("Something went wrong...");
            console.log(error);
            
            
        }
    
    });
    
    connection.end();
