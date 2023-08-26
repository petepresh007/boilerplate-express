require("dotenv").config();
let express = require('express');
let app = express();
console.log("Hello World");
const bodyParser = require("body-parser");

// app.get("/", (req, res)=>{
//     res.send("Hello Express");
// });

/**CREATING BODY */
app.use(bodyParser.urlencoded({ extended: false }));

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
}, function (req, res) {
    res.json({ time: req.time });
});


/**PARAMETERS */
app.get("/:word/echo", function (req, res) {
    const { word } = req.params;
    res.json({ echo: word });
})

/**REQ.QUERY */
app.route("/name").get((req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
});





























module.exports = app;
