const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// application/json
app.use(bodyParser.json());

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/login", (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.listen("9000");
