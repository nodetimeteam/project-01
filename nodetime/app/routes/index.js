const router = require('express').Router();
const users = require('./users')
const speech = require('./speech')
const fileUploadsRoutes = require('./fileuploads')

module.exports = router;

router.use('/api/users', users)
router.use('/api/speech', speech)

router.use('/api/fileuploads', fileUploadsRoutes)