/**
|----------------------------------
| Basic Api Route
|----------------------------------
*/

const express = require("express");
const router = express.Router();
const BasicController = require('../../controller/BasicController');
const LoginController = require('../../controller/LoginController');
const RegisterController = require('../../controller/RegisterController');

// get all countries
router.get('/countries', BasicController.getCountries);

// get specific state
router.get('/countries/state/:id', BasicController.getSpecificStates);

// get nigeria  states
router.get('/nigeria/state', BasicController.getStates);

// get nigeria  states
router.get('/states', BasicController.getMobileStates);

// get lga 
router.get('/lga/:id', BasicController.getLga);

router.get('/lga/state/:id', BasicController.getLgaState);

// login user 
router.post('/login', LoginController.loginUser);

// register user 
router.post('/register', RegisterController.registerUser);

// forgot password
router.post('/forgot/password', LoginController.forgotPassword);

module.exports = router;