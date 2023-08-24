require("dotenv").config();
let express = require('express');
let app = express();
console.log("Hello World");

// app.get("/", (req, res)=>{
//     res.send("Hello Express");
// });

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

console.log(__dirname)

app.get("/json", (req, res) => {
    // let pr = process.env.MESSAGE_STYLE;
    // if (pr === "uppercase") {
    //     return res.json({ "message": "HELLO JSON" })
    // } else {
    //     return res.json({ "message": "Hello json" })
    // }
    // let response = "Hello json";
    // if (process.env.MESSAGE_STYLE === "uppercase"){
    //     response = response.toUpperCase();
    // }else{
    //     response = "Hello json";
    // }
    // return res.json({ "message": response })


    var response = {
        "message": "Hello json"
    }
    if (process.env.MESSAGE_STYLE === 'uppercase'){
        response.message = response.message.toUpperCase();
    }
    return res.json(response);
})


































module.exports = app;
