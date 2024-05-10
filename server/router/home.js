const express = require('express')
const services = require('../services/db.services')
const token = require('../controller/tokent')

const rigetter = require('../controller/register')
const authMiddleware = require('../middleware/middleware')
const router = express.Router()

router.get('/api/v1/home',authMiddleware,async (req,res)=>{
    const data =await services.getAll()
    res.send(data)
})

router.post('/api/v1/Login',token)

router.post('/api/v1/Register',rigetter)
router.delete('/api/v1/home/:id', async (req,res)=>{
    const id = req.params.id
    const result = await services.deleteData(id);
    res.send('xoa thanh cong')
})


module.exports = router