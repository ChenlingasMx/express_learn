const express = require("express");

// 2.创建应用对象
const app = express();

// 3. 创建路由

app.get("/request", (req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.headers);
  // console.log(req.httpVersion);
  res.end("home");

  // express 操作
  // console.log("req.path", req.path);
  // console.log("req.query", req.query);
  // 获取ip
  // console.log("req.ip", req.ip);
  // console.log("req.get", req.get("host"));
});

app.get("/search/:id", (req, res) => {
  console.log("req.params.id", req.params.id);
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("详情页");
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
