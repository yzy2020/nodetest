var express = require('express');
var router = express.Router();
const user = require('../dao/users_dao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('进入路由');
});

router.post('/login', function(req, res){
  user.login(req, res)
}) 
module.exports = router;
