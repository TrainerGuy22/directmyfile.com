var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.sendfile("index.html");
});

app.get("/js/:file", function (req, res) {
    res.sendfile("js/" + req.param("file"));
});

app.get("/css/:file", function (req, res) {
    res.sendfile("css/" + req.param("file"));
});

app.listen(8080);