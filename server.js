// import dependencies 
const express = require("express");
const cors = require("cors");

// import json files
const projects = require("./projects.json");
const about = require("./about.json")

// create app object
const app = express()

// set up middleware
app.use(cors())

// test route
app.get("/", (req, res) => {
    res.send("hello world")
})

// route for retrieving projects
app.get("/projects", (req, res) => {
    // send projects via json
    res.json(projects)
})

// route for retrieving about info
app.get("/about", (req,res) => {
    // send about info via json
    res.json(about)
})

// declare port variable
const PORT = process.env.PORT || 4000;

// turn on server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))