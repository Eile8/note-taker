const express = require("express")
const app = express()
const PORT = 3001;
const notes = require("./public/assets/js/db/db.json");
const router = express.Router();

const path = require('path')
//const fs = require('fs');

app.set("view engine", "")

//Middleware
app.use(express.static("public"))


//HTML routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
    console.log("come")
})

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"))
    console.log("come")
})

router.get("*", (req, res) => {
    console.log("here")
    res.sendFile(path.join(__dirname, "index.html"))
})


app.use("/", router);

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


app.get("/api/notes/:notesId", (req, res)=> {
    res.json(req.params);
})



app.post("/apit/notes" )




app.listen(PORT, () => {
    console.log("it is running!")
})
