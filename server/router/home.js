const express = require('express')
const services = require('../services/db.services')
const token = require('../controller/tokent')
const authMiddleware = require('../middleware/middleware')
const router = express.Router()

router.get('/api/v1/home',authMiddleware,async (req,res)=>{
    const data =await services.getAll()
    res.send(data)
})

router.post('/api/v1/Login',token)

router.post('/api/v1/Register',)


module.exports = router