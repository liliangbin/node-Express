var express = require('express');
var router  =  express.Router();
/*get的方法获取我的经历的想法*/
router.get("/",function (req,res,next) {
    res.send("这是一个用于显示我的经历的界面");
})

module.exports = router;