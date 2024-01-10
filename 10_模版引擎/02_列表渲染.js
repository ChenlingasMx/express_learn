const ejs = require("ejs");
const fs = require("fs");

let xiyou = ["唐僧", "孙悟空", "猪八戒", "沙和尚"];

const html = fs.readFileSync(__dirname + "/02_西游.html").toString();

const result = ejs.render(html, { xiyou: xiyou });

console.log("result", result);
