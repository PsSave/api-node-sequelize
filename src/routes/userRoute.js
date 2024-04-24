const {Router} = require('express');
const UserController = require('../controllers/UserController.js');

const userController = new UserController();
const router = Router();

router.get('/users', (req, res) => userController.getAll(req, res));

module.exports = router;

