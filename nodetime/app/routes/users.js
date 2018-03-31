const router = require('express').Router();
const usersController = require('../controllers/users.controllers')

module.exports = router;

router.get('/', usersController.readAll)
router.post('/', usersController.create)