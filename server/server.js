var express = require("express");
var util = require("./util.js");
var app = express();
var cluster = require("cluster");
var readline = require('readline');
var fs = require("fs");

function killWorker(worker) {
    return function() {
        worker.destroy();  
    };
}

function killWorkers() {
    var delay = 0;
    for (var id in cluster.workers) {
        var func = killWorker(cluster.workers[id]);
        if(delay==0)
            func();
        else
            setTimeout(func, delay);
        delay += 60000 * 1;
    }
}

if (util.isMaster()) {
    var rl = readline.createInterface(process.stdin, process.stdout);
    console.log("Initializing Workers");
    util.initWorkers();
    
    setTimeout(function() {
       rl.prompt();
       rl.on('line', function(line) {
           if (line==="restart") {
	       killWorkers();
               rl.prompt();
           }
       });
    }, 5000);
}

if (util.isWorker()) {
    app.get("/", function(req, res) {
        res.sendfile("index.html");
    });

    app.get("/js/:file", function (req, res) {
        var path = "js/" + req.param("file");
        fs.exists(path, function (exists) { 
           if (exists) { 
              res.sendfile(path);
           } else {
              res.status(404).sendfile("404.html");
           }
        });
    });

    app.get("/css/:file", function (req, res) {
        var path = "css/" + req.param("file");
        fs.exists(path, function (exists) {
           if (exists) {
              res.sendfile(path);
           } else {
              res.status(404).sendfile("404.html");
           }
        });
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
    app.get("*", function (req, res) {
       res.status(404).sendfile("404.html");
    });

    app.listen(8080);
}
