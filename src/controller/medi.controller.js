const mediModel=require('../Models/meditation.model')
const {uploadFile}=require('../services/Storage.service')
async function uploadMedi(req,res){
    const{title,duration,description}=req.body
    const file=req.file
    const result=await uploadFile(file.buffer.toString('base64'))
    console.log(result);

    console.log(req.user);
    
    const medi=await mediModel.create({
        
        uri:result.url,
        title,
        description,
        duration
    })

    res.status(201).json({
       message:'upload success',
       medi
    })

}

async function fetchMedi(req,res){
    const medi=await mediModel.find()
    res.status(200).json({
       message:'fetch success',
       medi
    })

}

module.exports={uploadMedi,fetchMedi}