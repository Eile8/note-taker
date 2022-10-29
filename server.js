const PORT = process.env.PORT || 3001;
const express = require("express")
const app = express()
const notes = require("./db/db.json");


const path = require('path')
const fs = require('fs');

//Middleware
app.use(express.static("public"))

//API routes
app.get("/api/notes", (req, res) => {
    console.log("it's working!")
    res.json(notes)
})


//Creating new notes
function newNotes() {


}

//Post API request
app.post("/api/notes", (req, res)=> {
    console.log("Success!")
    res.json(newNotes)
})


//HTML routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
    console.log("come")
})


app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"))
    console.log("come")
})

/*app.get("*", (req, res) => {
    console.log("here")
    res.sendFile(path.join(__dirname, "index.html"))
})
*/


app.listen(PORT, () => {
    console.log("it is running!")
})
