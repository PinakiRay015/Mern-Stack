const express = require("express")

const app = express();

app.get("/" , (req , res)=>
{
    res.send("Hello developers")
})

app.listen("5000" , ()=>
{
    console.log("The app is running on the port 5000")
})