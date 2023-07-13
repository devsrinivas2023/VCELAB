import express from 'express';
import {Student} from "./student.js"
const app = express();
app.use(express.json());
const port=8000
const service = new Student()

app.post("/student",(req,res)=>{
    try{
        if(service.save(req.body)){
            res.sendStatus(200);
           }else{
            res.sendStatus(204);
           }
    }catch(error){
        res.sendStatus(404);
    }
})//testing completed

app.get("/student",(req,res)=>{
    try{
        const data = service.getInfo();
        if(data.length==0){
            res.status(204).send([]);
        }else{
            res.status(202).send(data);
        }
    }catch(error){
        res.sendStatus(404);
    }
})//testing completed
app.get("/student/:id",(req,res)=>{
    let st={}
    service.data.forEach((i)=>{
        if(i.id==req.params.id){
            st=i;
        }
    })
    if(st==={}) return res.sendStatus(204);
    else return res.status(200).send(st);
})// Testing completed 
app.delete("/student/:id",(req,res)=>{
    const temp=[];
    const id = req.params.id;
    service.data.forEach((i)=>{
        if(i.id!=id){
            temp.push(i);
        }
    })
    service.data= temp;
    res.sendStatus(200);
});//testing completed

//express configuration
try{
    app.listen(port,()=>{
        console.log("APP started running",port);
    })
}catch(error){
    console.log(error);
}