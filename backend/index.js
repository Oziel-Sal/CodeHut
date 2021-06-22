const express = require("express");
const app = express();
const axios = require("axios");
const { response } = require('express');
const fetch = require('node-fetch');
app.use(express.json());

/*
    I will leave this here as an example that you can use
    when building your APIs. I suggest that you try to understand
    what each line is doing. Reach out if you have any questions.
*/
console.log('running outside express')

app.get('/randomAnime', function (req, res) {
    console.log('running inside express')
    axios.get("https://animechan.vercel.app/api/random")
      .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        /* 
              It is good practice to handle the error and send back the 
              error message that was received from the API call
          */
        console.log(error);
        res.status(400).json({ error: "An error occurred" });
      });
  });

app.listen(process.env.PORT || 8080, () => console.log('Listening at locahost:8080'))
