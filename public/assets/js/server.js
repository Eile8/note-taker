const express = require("express")
const path = require('path')
const fs = require('fs');
const PORT = 3000;

const app = express()
const notes = require("./db/db.json")

app.use(express.static("public"))

//HTML routes
app.get("/notes", (req, res) => {
    console.log("here")
    res.sendFile(path.join(__dirname, "notes.html"))
})

app.get("*", (req, res) => {
    console.log("here")
    res.sendFile(path.join(__dirname, "index.html"))
})

//API routes
app.get("/api/notes", (req, res) => {
    console.log("it's working!")
    res.json(notes)
})

//Post API request
app.post("/api/notes", (req, res)=> {
    console.log("Success!")
    res.json(notes)
})

app.post("/apit/notes" )

app.listen(PORT, () => console.log("it is running!"))