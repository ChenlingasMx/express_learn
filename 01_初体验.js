const express = require("express");

// 2.创建应用对象
const app = express();

// 3. 创建路由

app.get("/", (req, res) => {
  res.end("home");
});

app.get("/home", (req, res) => {
  res.end("home");
});

// post
app.post("/login", (req, res) => {
  res.end("login");
});

// 匹配所有方法
app.all("/test", (req, res) => {
  res.end("test");
});

// 404响应
app.all("*", (req, res) => {
  res.end("404");
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
