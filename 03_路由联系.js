const express = require("express");

// 2.创建应用对象
const app = express();

const datas = [{ id: 1, name: "周杰伦" }];

// 3. 创建路由

app.get("/singer/:id", (req, res) => {
  const { id } = req.params;
  const result = datas.find((item) => item.id === Number(id)) || {};
  //   res.status(200)
  //   res.set('aaa','bbb')
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
        <div>${result.name || "-"}</div>
    </body>
  </html>
  
  `);
});

app.listen("3000", () => {
  console.log("服务启动成功,端口 3000 正在启动中...");
});
