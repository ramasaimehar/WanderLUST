const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
    p:{
        type:Number,
        required:true
    },
    
    firstname:{
        type:String,
        required:true

    }
   


})

//create a collection
 const Table=new mongoose.model("Table",employeeSchema);

// savind doc
saveDoc=async()=>{
    let s1=new Table({
        p:"10",
        firstname:"akhil"
        
    })
  await s1.save()
}
module.exports=saveDoc