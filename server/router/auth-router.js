const express = require('express');
const router = express.Router();

const { home, register } = require('../controller/auth-controller');


router.route('/').get(home);
router.route('/register').post(register);


module.exports = router;