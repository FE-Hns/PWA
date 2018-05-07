const express = require("express");
const app = express();
// app.use(express.static("public"));
app.use(express.static("static"));

app.listen(3000,function (params) {
    console.log("--------加载OK----------");
})