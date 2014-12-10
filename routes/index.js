var express = require('express');
var router = express.Router();
var members = require('./members');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getavailableuserlist', members.getAvailableMembers);

module.exports = router;
