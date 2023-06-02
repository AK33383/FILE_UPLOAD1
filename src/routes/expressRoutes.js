const express = require('express')
const router = express.Router()
const { post } = require('../controller/controles')
const { upload }= require('../middleware/multermiddleware')



router.post('/post', upload.array('files'),post)



module.exports = router