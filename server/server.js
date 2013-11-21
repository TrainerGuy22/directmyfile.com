var express = require("express");
var util = require("./util.js");
var app = express();

if (util.isMaster()) {
    console.log("Initializing Workers");
    util.initWorkers();
}

if (util.isWorker()) {
    app.get("/", function(req, res) {
        res.sendfile("index.html");
    });

    app.get("/js/:file", function (req, res) {
        res.sendfile("js/" + req.param("file"));
    });

    app.get("/css/:file", function (req, res) {
        res.sendfile("css/" + req.param("file"));
    });

    app.get("/contact", function (req, res) {
        var email = req.param("email");
        if (!email) {
            res.end(JSON.stringify({
                error: "Please specify an Email Address"
            }));
            return;
        }
        util.requestContact(email);
        res.end(JSON.stringify({
            error: null
        }));
    });

    app.listen(8080);
}