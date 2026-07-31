const {ImageKit}=require("@imagekit/nodejs")
const ImageKitClient=new ImageKit({
    privateKey:process.env.ImageKit_Private_Key,
})
async function uploadFile(file){
    const result=await ImageKitClient.files.upload({
        file,
        fileName:'medi'+Date.now(),
        folder:"backend/medi"
    })
    return result
}
module.exports={uploadFile}