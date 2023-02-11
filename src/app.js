const express = require("express");

const app = express();

//ROUTES

app.get('/', (req,res) => {
    res.send("home")
})


//listen
app.listen(3000);