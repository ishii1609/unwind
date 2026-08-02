const jwt=require('jsonwebtoken')


async function authCheck(req,res,next){
const token = req.cookies.token;


if (!token) {
  return res.status(401).json({ message: "Unauthorized" });
}

const decoded = jwt.verify(token, process.env.JWT_SECRET);

req.user = decoded;


next();
}
module.exports={authCheck}