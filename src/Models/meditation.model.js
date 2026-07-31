const mongoose=require('mongoose')
const meditationSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    title:String,

    duration:Number,

    audio:String,

    description:String,


    completed:{
        type:Boolean,
        default:false
    }

},{timestamps:true})