const router = require('express').Router();
const users = require('./users')

module.exports = router;

router.use('/api/users', users)
