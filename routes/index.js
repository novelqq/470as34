var express = require('express');
var router = express.Router();

const dbcontroller = require("../controllers/dbcontroller");
/* GET home page. */
router.get('/', dbcontroller.allrects);


router.post("/create", dbcontroller.postrect);


router.put('/rect/:id', dbcontroller.editrect);
module.exports = router;
