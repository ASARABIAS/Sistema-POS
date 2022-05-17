const express = require('express');
const router = express.Router();

const saleController = require('../controllers/saleController');

router.get('/',saleController.list);

module.exports = router;