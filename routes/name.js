var express = require("express");
var router = express.Router();


/*这是一个用于显示我的名字的界面*/
 router.get('/',function (req,res,next) {
    // res.sendFile('../public/html/in.txt');

     /*这里进行处理，然后把数据传给某个玩意
     * 感觉还是需要用模板引擎*/

     res.redirect('/static/html/name.html');
 });

module.exports= router;