var express = require('express');
var router = express.Router();
var sum=0;
var more=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    var rnum=parseInt(Math.random()*(20-1)+1);
  
  res.send('“[fn] applied to '+rnum+' is '+Math.sqrt(rnum));
});

module.exports = router;
