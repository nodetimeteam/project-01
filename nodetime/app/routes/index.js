const router = require('express').Router();
const users = require('./users')
const speech = require('./speech')

module.exports = router;

router.use('/api/users', users)
router.use('/api/speech', speech)