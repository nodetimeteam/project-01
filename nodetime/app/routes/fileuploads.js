const router = require('express').Router()
const fileUploadsController = require('../controllers/fileuploads.controller')


module.exports = router

router.get('/signing', fileUploadsController.signing)