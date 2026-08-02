const express=require('express')
const authRoutes=require('./routes/auth.Routes')
const mediRoutes=require('./routes/medi.Routes')
const journalRoutes=require('./routes/journal.Routes')
const cookieParser =require ('cookie-parser')
const app=express()
app.use(express.json())
app.use(cookieParser());
app.use('/api/auth',authRoutes)
app.use('/api/medi',mediRoutes)
app.use('/api/journal',journalRoutes)

module.exports=app