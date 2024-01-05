const express = require("express");
const fs = require("fs");
const path = require("path");
// 2.创建应用对象
const app = express();

// 中间件函数
function recordMiddleware(req, res, next) {
  // 获取url和ip
  let { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );
  next();
}

// 使用中间件函数
app.use(recordMiddleware);

app.get("/home", (req, res) => {
  res.send("前台首页");
});

app.get("/admin", (req, res) => {
  res.send("后台首页");
});

app.all("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
