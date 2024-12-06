const mongoose=require('mongoose');
const uri="mongodb://localhost:27017/shortenlink";
try{
    mongoose.connect(uri);
}catch(err){
    console.log(err);
}
const linkSchema=mongoose.Schema({
    longUrl: String,
    shortUrl:String
})
const model=mongoose.model("links",linkSchema);
module.exports=model;