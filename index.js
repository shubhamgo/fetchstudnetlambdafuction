var mysql = require('mysql');
var pool  = mysql.createPool({
     host    :'studentapplication-prod.c34zcos0ib9u.us-east-1.rds.amazonaws.com',
    user     : 'root',
    password : 'aws78654',
    database : 'db_student'
  });

exports.handler =  (event, context, callback)=> {


pool.getConnection(function(err, connection) {
    if (err) throw err;
var queryString = "select * from  info ";    
        connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
        console.log("the  data from db : "); 
        callback(null,rows);

        connection.release(); 
        pool.end();
        
        
    });
});
};

