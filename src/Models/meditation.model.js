const mongoose=require('mongoose')
const meditationSchema = new mongoose.Schema({

   

     uri: {
        type: String
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

const mediModel = mongoose.model("Medi", meditationSchema);
module.exports= mediModel;