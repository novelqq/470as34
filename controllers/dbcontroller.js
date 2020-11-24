const mysqllib = require("../lib/mysqllib");
var logger = require('morgan');

exports.allrects = function(req, res, next) {
    let sql = "SELECT * FROM rects";
    mysqllib.executeQuery(sql).then((d) => {
        res.status(200).send({"rects": d});
    });
}

exports.postrect = function(req, res, next) {
    let sql = `INSERT INTO rects (width, height, color, freq) VALUES (${req.params.width}, ${req.params.height}, ${req.params.height}, '${req.params.color}', ${req.params.freq})`;
    mysqllib.executeQuery(sql).then((d) => {
        res.status(200).send({"message": "sent query"});
    })
}

exports.editrect = function(req, res, next) {
    let sql = `UPDATE rects SET width = ${req.params.width}, height = ${req.params.height}, color = '${req.params.color}', freq = ${req.params.freq}`;
}