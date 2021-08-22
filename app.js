const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");

app.get("/", (req, res) => {
    res.send("Node JS Express Server")
})


app.get("/countries/all", (req, res) => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
        res.send(response.data)
    })
    .catch(err => console.error(err))
})


app.listen(port, () => console.log("Listening on port: ", port));


