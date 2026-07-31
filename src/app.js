const express=require('express')
const authRoutes=require('./routes/authRoutes')
const mediRoutes=require('./routes/mediRoutes')
const app=express()
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/medi',mediRoutes)
module.exports=app