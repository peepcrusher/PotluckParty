var express = require("express");
var path = require("path");
var routes = require("./routes/routes")
var cors = require("cors");
// var connection = require("./sql/connection");


// var routes = require("./routes/routes")

var app = express();
var PORT = 3000;

var mysql = require("mysql");
var connection = require("./sql/connection");
// pass through the cridentials to connect to mysql and give the intended database
// var connection = mysql.createConnection({
    
//     host: "localhost",

//     port: 3306,

//     user: "root",

//     password: "password",
//     database: "potluck_db"

// });

// //connect to the database
// connection.connect(function(err){
//     if(err) throw err;

//     console.log("Connection Successful");
//     afterConnect();
// })

// function afterConnect(){
//     connection.query("SELECT * FROM people", function(err, res){
//         if(err) throw err;

//         console.log(res);

//     });
// }



//set up express to handle data parsing
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//basic route that sends the index.html page

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

// All additional Routes
app.use("/", routes);


app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})