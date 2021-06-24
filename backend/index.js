const express = require("express");
const app = express();
const axios = require("axios");
var cors = require('cors');
app.use(express.json());
app.use(cors());
'use strict';
const snoowrap = require('snoowrap');

//OAuth Reddit API

require('dotenv').config()
const r = new snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  username: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_PASSWORD
});

//API Call to get Random Post from r/AppIdeas
//Reddit Title:  -> .title
//Reddit Author: -> .author
//Redit Description: -> .selftext

app.get('/randomPost', function (req, res) {
  console.log('running inside express')
  var subReddit = r.getSubreddit('AppIdeas');
  subReddit.getRandomSubmission().then((posts) => {
    // console.log(posts.title)
    // console.log(posts.author)
    // console.log(posts.selftext)
    res.status(200).json(posts);
  })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error: "An error occurred" });
    });
});

app.listen(process.env.PORT || 8080, () => console.log('Listening at locahost:8080'))
