npm install express mysql --save --save-exact

var express = require('express');
var app = express();
var mysql      = require('mysql');
var dbconfig   = require('database.js');
var connection = mysql.createConnection(dbconfig);
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ROOT',
  password : 'alsgh5600',
  port     : 3306,
  database : 'qwer_db'

})

connection.connect();

 

app.use(express.static('public'));

 

app.listen(3000,function(){

  console.log("server start on port 3000!");

})

 

app.get('/', function(req,res){

  res.sendFile(__dirname+'/public/main.html');

});

 

app.post('/', function(req, res){

 

  var responseData = {};

  

  var sql0 = 'select time from sensors';

  var sql1 = 'select payload from sensors where topic = "returntemp"; '

  var sql2 = 'select payload from sensors where topic = "returnhumi"; '

  var sql3 = 'select payload from sensors where topic = "soilhumidity"; '

//  var query =  connection.query('select payload from sensors where topic="returntemp" ', function(err,rows){

 var query =  connection.query(sql0 , function(err,rows){

    responseData.time = [];

 

    if(err) throw err;

    if(rows[0]){

      responseData.result = "ok";

      rows.forEach(function(val){

           responseData.time.push(val.time);   

      })

    }

    else{

      responseData.result = "none";

      responseData.time = "";

    } ;

  var query =  connection.query(sql1, function(err,rows){

    responseData.payload = [];

 

    if(err) throw err;

    if(rows[0]){

      responseData.result = "ok";

      rows.forEach(function(val){

           responseData.payload.push(val.payload);   

      })

    }

    else{

      responseData.result = "none";

      responseData.payload = "";

    }

//     console.log(responseData);

//    res.json(responseData);

  });

   var query =  connection.query(sql2, function(err,rows){

    responseData.payload2 = [];

 

    if(err) throw err;

    if(rows[0]){

      responseData.result = "ok";

      rows.forEach(function(val){

           responseData.payload2.push(val.payload);   

      })

    }

    else{

      responseData.result = "none";

      responseData.payload2 = "";

    }

//     console.log(responseData);

//    res.json(responseData);

  });

   var query =  connection.query(sql3, function(err,rows){

    responseData.payload3 = [];

 

    if(err) throw err;

    if(rows[0]){

      responseData.result = "ok";

      rows.forEach(function(val){

           responseData.payload3.push(val.payload);   

      })

    }

    else{

      responseData.result = "none";

      responseData.payload3 = "";

    }

     console.log(responseData);

    res.json(responseData);

  });

  });  

});