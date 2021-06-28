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
        console.log("Connected!");
        var sql = "INSERT INTO names (name) VALUES ('Michael Jordan')";
        conn.query(sql, function(err,result){
            if(err){
                console.log(err);
                return res.status(400).json({ error: "An error occurred" });            
            }     
            console.log("Name Inserted");
            return res.status(200).json(result);

        });
})
//Select * from DB
app.get('/getAll' ,function(req,res){
        console.log("Connected!");
        conn.query("SELECT * FROM names", function(err, result, fields) {
            if(err){
                console.log(err);
                return res.status(400).json({ error: "An error occurred" });            
            }     
            console.log(result);
            return res.status(200).json(result);
        });

})

//Select * from DB
app.get('/getName' ,function(req,res){
        console.log("Connected!");
        conn.query("SELECT * FROM names", function(err, result, fields) {
            if(err){
                console.log(err);
                return res.status(400).json({ error: "An error occurred" });            

            }           
            console.log(result[0].name);
            return res.status(200).json(result[0].name);
        });
})


app.listen(process.env.PORT || 8080, () => console.log('Listening at locahost:8080'))