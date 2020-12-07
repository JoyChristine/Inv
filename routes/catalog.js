var express = require('express');
var router = express.Router();

// Require controller modules.
var category_controller = require('../controllers/bookController');
var item_controller = require('../controllers/authorController');