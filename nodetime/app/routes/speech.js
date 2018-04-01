const router = require('express').Router();
const speechController = require('../controllers/speech.controller')

module.exports = router;


router.post('/', speechController.streamingSpeech)