const mysqllib = require("../lib/mysqllib");
var logger = require('morgan');

exports.allrects = function(req, res, next) {
    let sql = "SELECT * FROM rects;";
    mysqllib.executeQuery(sql).then((d) => {
        res.render("rects", {rectangles: d});
    });
}

exports.displayrects = function(req, res, next) {
    let sql = "SELECT * FROM rects;";
    mysqllib.executeQuery(sql).then((d) => {
        res.render("display", {rectangles: d});
    });
}


exports.createrect = function(req, res) {
    res.render("createrect");
}

exports.postrect = function(req, res, next) {
    let sql = `INSERT INTO rects (width, height, color, freq, border, borderradius, animate) VALUES (${req.body.width}, ${req.body.height}, '${req.body.color}', ${req.body.freq}, ${req.body.border}, ${req.body.borderradius}, '${req.body.animate}');`;
    mysqllib.executeQuery(sql).then((d) => {
        res.redirect("/");
    });
}

exports.vieweditrect = function(req, res, next) {
    let sql = `SELECT * FROM rects WHERE rect_id=${req.params.id}`;
    mysqllib.executeQuery(sql).then((d) => {
        res.render('editrect.pug', {rect: d[0]});
    });
}

exports.postedit = function(req, res, next) {
    let sql = `UPDATE rects SET width = ${req.body.width}, height = ${req.body.height}, color = '${req.body.color}', freq = ${req.body.freq}, border = ${req.body.border}, borderradius = ${req.body.borderradius}, animate = '${req.body.animate}' WHERE rect_id=${req.params.id};`;
    mysqllib.executeQuery(sql).then((d) => {
        res.redirect("/");
    });
}
exports.editrect = function(req, res, next) {
    let sql = `UPDATE rects SET width = ${req.body.width}, height = ${req.body.height}, color = '${req.body.color}', freq = ${req.body.freq}, border = ${req.body.border}, borderradius = ${req.body.borderradius}, animate = '${req.body.animate}' WHERE rect_id=${req.params.id};`;
    mysqllib.executeQuery(sql).then((d) => {
        res.redirect("/");
    });
}

exports.deleterect = function(req, res, next) {
    let sql = `DELETE FROM rects WHERE rect_id=${req.params.id}`;
    mysqllib.executeQuery(sql).then((d) => {
        res.redirect("/");
    });
}