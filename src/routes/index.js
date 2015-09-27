'use strict';
var express = require('express');
var router = express.Router();
var propertyPicker = require('../controllers/property-picker');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/bar', function(req, res) {
    var mission = { bar: 'impossible'}
    var bar = propertyPicker.pickBar(mission);
    res.send(bar);
});

module.exports = router;