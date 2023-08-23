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
    if (process.env.MESSAGE_STYLE === "uppercase") {
        return res.json({ "message": "HELLO JSON" })
    } else {
        return res.json({ "message": "Hello json" })
    }

})


































module.exports = app;
