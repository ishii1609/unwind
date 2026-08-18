const express=require('express')
const mediController=require('../controller/medi.controller')
const router=express.Router();
const multer=require('multer');
const { authCheck } = require('../middleware/auth.middleware');
const upload= multer({
    stoarge:multer.memoryStorage()
})

router.post('/upload',upload.single('audio'),mediController.uploadMedi)
router.get('/fetch',mediController.fetchMedi)



module.exports=router;