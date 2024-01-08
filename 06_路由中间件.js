const express = require("express");
const fs = require("fs");
const path = require("path");
// 2.创建应用对象
const app = express();

// 中间件
let checkeCodeMiddleware = (req, res, next) => {
  if (req.query.code === "521") {
    next();
  } else {
    res.send("暗号错误");
  }
};

app.get("/home", checkeCodeMiddleware, (req, res) => {
  res.send("前台首页");
});

app.get("/admin", checkeCodeMiddleware, (req, res) => {
  res.send("后台首页");
});

app.all("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
