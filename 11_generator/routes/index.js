var express = require("express");
var formidable = require("formidable");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/portrait", (req, res) => {
  res.render("portrait");
});

router.post("/portrait", (req, res, next) => {
  // 创建表单对象
  const form = formidable({
    multiples: true,
    uploadDir: path.join(__dirname, "../public/images"),
    keepExtensions: true,
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    let url = "/images/" + files.portrait.newFilename;
    res.send(url);
  });
});

module.exports = router;
