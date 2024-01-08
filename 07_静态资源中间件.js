const express = require("express");
// 2.创建应用对象
const app = express();

// 创建静态资源中间件
app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  res.send("hellow express");
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
