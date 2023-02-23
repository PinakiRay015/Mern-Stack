const express = require("express")

const app = express();

app.get("/" , (req , res)=>
{
    res.send("<h2>Welcome to the Home page</h2>")
})

app.get("/about" , (req , res)=>
{
    res.send("<h2>Welcome to the About page</h2>")
})

app.listen("5000" , ()=>
{
    console.log("The app is running on the port 5000")
})