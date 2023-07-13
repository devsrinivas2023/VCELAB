import express from 'express';
import {Student} from "./student.js"
const app = express();
app.use(express.json());
const port=8000
const service = new Student()
app.post("/student",(req,res)=>{
   console.log(req.body);
   if(service.save(req.body)){
    res.send("OK")
   }else{
    res.send("Failed")
   }
})
app.get("/student",(req,res)=>{
res.send(service.getInfo())
})
try{
    app.listen(port,()=>{
        console.log("APP started running",port);
    })
}catch(error){
    console.log(error);
}