const express=require('express')
const authRoutes=require('./routes/auth.Routes')
const mediRoutes=require('./routes/medi.Routes')
const journalRoutes=require('./routes/journal.Routes')
const sleepRoutes=require('./routes/sleep.Routes')
const cookieParser =require ('cookie-parser')
const app=express()
const cors = require("cors");
app.use(cors({
  origin: "https://unwind-frontend.vercel.app/", // frontend ka exact URL
  credentials: true,
}));app.use(express.json())

app.use(cookieParser());
app.use('/api/auth',authRoutes)
app.use('/api/medi',mediRoutes)
app.use('/api/journal',journalRoutes)
app.use('/api/sleep',sleepRoutes)


module.exports=app