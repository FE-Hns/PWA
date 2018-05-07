const express = require("express");
const app = express();

app.use(express.static("static"));

app.listen(3003,function (params) {
    console.log("--------加载OK----------");
})