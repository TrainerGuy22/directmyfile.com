var http = require("http");
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

function requestContact(email) {
    var c = http.request({
        host: "n.tkte.ch",
        port: 80,
        path: "h/1571/4RRGZ_8mWPPgIcNMwQinEYu0?payload=" + encodeURIComponent("> " + email + " asked to be contacted.")
    });
    c.end();
}

function initWorkers() {
    if (cluster.isMaster) {
        for (var i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('online', function(worker) {
            console.log('worker ' + worker.process.pid + ' started')
        });

        cluster.on('exit', function(worker, code, signal) {
            console.log('worker ' + worker.process.pid + ' died');
            cluster.fork();
        });
    }
}

module.exports = {
    requestContact: requestContact,
    initWorkers: initWorkers,
    isWorker: function() {
        return cluster.isWorker;
    },
    isMaster: function() {
        return cluster.isMaster;
    }
};