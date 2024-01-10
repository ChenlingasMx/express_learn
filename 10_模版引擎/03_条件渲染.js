const ejs = require("ejs");
const fs = require("fs");

let isLogin = false;
const html = fs.readFileSync(__dirname + "/03_html.html").toString();

let result = ejs.render(html, { isLogin: isLogin });

console.log(result);
