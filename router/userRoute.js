const express = require('express');
const router = express.Router();

const { registerUserController, loginUserController } = require('../controllers/userController');


router
    .post('/register', registerUserController)
    .post('/login', loginUserController);

module.exports = router;