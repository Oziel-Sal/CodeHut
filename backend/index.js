const express = require("express");
const app = express();
const axios = require("axios");
const snoowrap = require('snoowrap');
const mysql = require('mysql');
var cors = require('cors');
app.use(express.json());
app.use(cors());
'use strict';

//OAuth Reddit API
require('dotenv').config()
const r = new snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  username: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_PASSWORD
});

//DataBase connection
var conn = mysql.createConnection({
  host: process.env.REACT_DB_HOST,
  user: process.env.REACT_DB_USER,
  password: process.env.REACT_DB_PASS,
  database: process.env.REACT_DB_NAME
})

//API Call to get Random Post from r/AppIdeas
//Reddit Title:  -> .title
//Reddit Author: -> .author
//Redit Description: -> .selftext

//Variables for inserting data into DB
var title = {};
var author = {};
var selfttext = {};

app.get('/randomPost', function (req, res) {
  var subReddit = r.getSubreddit('AppIdeas');
  subReddit.getRandomSubmission().then((posts) => {

    title = posts.title;
    author = posts.author.name;
    selfttext = posts.selftext;

    res.status(200).json(posts);
  })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error: "An error occurred" });
    });
});


//Inserts Author, Title, Description to Database
app.post('/insertPost', function (req, res) {

  const sql = "INSERT INTO posts(authors,titles,description) VALUES (?,?,?)";

  conn.query(sql, [author, title, selfttext], (err, result) => {
    if (err) throw err;

    //Passes json data to postman with STATUS 200 no error
    res.status(200).json(result);
  })
})

//Grabbing stored data from database
app.get('/getAll', function (req, res) {
  console.log("Connected!");
  conn.query("SELECT * FROM posts", function (err, result, fields) {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: "An error occurred" });
    }
    return res.status(200).json(result);
  });

})

app.listen(process.env.PORT || 8080, () => console.log('Listening at locahost:8080'))
