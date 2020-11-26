var express = require('express');
var router = express.Router();

const dbcontroller = require("../controllers/dbcontroller");
/* GET home page. */
router.get('/', dbcontroller.allrects);
router.get('/display', dbcontroller.displayrects);
router.get("/create", dbcontroller.createrect);
router.post("/create", dbcontroller.postrect);

router.get('/rect/:id', dbcontroller.vieweditrect);
router.put('/rect/:id', dbcontroller.editrect);
router.post('/rect/:id', dbcontroller.postedit);

router.delete('/delete/:id', dbcontroller.deleterect);
router.get('/delete/:id', dbcontroller.deleterect);
module.exports = router;
