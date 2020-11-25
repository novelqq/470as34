const mysqllib = require("../lib/mysqllib");
var logger = require('morgan');

exports.allrects = function(req, res, next) {
    let sql = "SELECT * FROM rects;";
    mysqllib.executeQuery(sql).then((d) => {
        res.render("rects", {rectangles: d});
    });
}

exports.createrect = function(req, res) {
    res.render("createrect");
}

exports.postrect = function(req, res, next) {
    let sql = `INSERT INTO rects (width, height, color, freq) VALUES (${req.body.width}, ${req.body.height}, ${req.body.height}, '${req.body.color}', ${req.body.freq});`;
    mysqllib.executeQuery(sql).then((d) => {
        res.redirect("/");
    })
}

exports.editrect = function(req, res, next) {
    let sql = `UPDATE rects SET width = ${req.params.width}, height = ${req.params.height}, color = '${req.params.color}', freq = ${req.params.freq};`;
    mysqllib.executeQuery(sql).then((d) => {
        res.redirect("/");
    })
}