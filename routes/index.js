var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EDAV Community', author: 'Kevin Gao (wg2311), Haibo Yu (hy2628)' });
});


router.get('/ggplot2', function(req, res, next) {
  res.render('ggplot2');
});


module.exports = router;
