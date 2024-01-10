const express = require("express");
const path = require("path");

const app = express();

// 1.设置模版引擎
app.set("view engine", "ejs");
// 2.设置模版文件存放位置 模版文件:具有模版语法的文件
app.set("views", path.resolve(__dirname, "views"));

app.get("/home", (req, res) => {
  let title = "我是标题";

  res.render("home", { title: title });
});

app.listen("9000", () => {
  console.log("服务启动成功,端口 9000 正在启动中...");
});
