var express = require('express');
var router = express.Router();

const dbcontroller = require("../controllers/dbcontroller");
/* GET home page. */
router.get('/', dbcontroller.allrects);

router.get("/create", dbcontroller.createrect);
router.post("/create", dbcontroller.postrect);

router.get('/rect/:id', dbcontroller.vieweditrect);
router.put('/rect/:id', dbcontroller.editrect);
router.post('/rect/:id', dbcontroller.postedit);
module.exports = router;
