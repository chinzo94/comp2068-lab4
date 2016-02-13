var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET Products page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Products' });
});
/* GET Services page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
/* GET About page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'About' });
});
/* GET Contact page. */
router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;

//# sourceMappingURL=index.js.map
