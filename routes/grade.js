var express = require("express");
var router = express.Router();

/*显示我的成绩*/
router.get("/",function (req,res,next) {
    res.send("这是一个显示成绩的界面");
})

module.exports = router;