const ejs = require("ejs");
const fs = require("fs");

let china = "中国";
let name = "天气不错";

let html = fs.readFileSync(__dirname + "/_html.html").toString();

let result = ejs.render(html, { china: china, name: name });

console.log("result", result);
