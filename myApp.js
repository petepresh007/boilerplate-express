require("dotenv").config();
let express = require('express');
let app = express();
console.log("Hello World");

// app.get("/", (req, res)=>{
//     res.send("Hello Express");
// });

app.use("/public", express.static(__dirname + "/public"));

/**CREATING A LOGGER */
app.use(function (req, res, next) {
    let string = req.method + " " + req.path + " " + "-" + " " + req.ip;
    console.log(string);
    next();
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

console.log(__dirname)

app.get("/json", (req, res) => {
    var response = {
        "message": "Hello json"
    }
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        response.message = response.message.toUpperCase();
    }
    return res.json(response);
})

/**CHAINING THE MIDDLEWARE*/
app.get("/now", function (req, res, next) {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    return res.send({ time: req.time });
});
































module.exports = app;
