const express = require("express");

// 2.创建应用对象
const app = express();

app.get("/other", (req, res) => {
  //   res.redirect("https://www.baidu.com");
  //   res.download(__dirname + "package.json");
  //   res.json({ name: "周杰伦" });

  res.sendFile(__dirname + "/index.html");
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
