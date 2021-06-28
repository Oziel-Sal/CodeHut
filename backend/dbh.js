const express = require("express");
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

const { query } = require('express');
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_practice"
})

//Insert to DB
app.post('/insertName' ,function(req,res){
    conn.connect(function(err){
        if(err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO names (name) VALUES ('Jane Doe')";
        conn.query(sql, function(err,result){
            if(err) throw err;
            console.log("Name Inserted");
        });
    });
    conn.destroy();
})
//Select * from DB
app.get('/getAll' ,function(req,res){
    conn.connect(function(err){
        if(err) res.status(400).json({ error: "An error occurred" });

        console.log("Connected!");

        conn.query("SELECT * FROM names", function(err, result, fields) {
            if(err) res.status(400).json({ error: "An error occurred" });;
            res.status(200).json(result);
            console.log(result);
        });

    });
    conn.destroy();

})

//Select * from DB
app.get('/getName' ,function(req,res){
    conn.connect(function(err){
        if(err) res.status(400).json({ error: "An error occurred" });

        console.log("Connected!");
        
        conn.query("SELECT * FROM names", function(err, result, fields) {
            if(err) res.status(400).json({ error: "An error occurred" });;
            res.status(200).json(result[0].name);
            console.log(result[0].name);
        });

    });
})

app.listen(process.env.PORT || 8080, () => console.log('Listening at locahost:8080'))