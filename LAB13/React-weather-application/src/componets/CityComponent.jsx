import { Button, Paper,TextField,Card, Typography } from "@mui/material"
import { useState } from "react";
import axios from 'axios'
export default ()=>{
    const[input,setInput]=useState("");
    const[data,setData]=useState(null);
    const getInput=(e)=>{
        setInput(e.target.value);
    }
    const btnHandler=async()=>{
       axios.get(`https://openweathermap.org/data/2.5/find?q=${input}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`).then((res)=>{
        setData(res.data);
       }).catch((error)=>{
        console.log(error);
       })
       console.log(data);
    }
    const out =()=>{ 
        if(data!=undefined ){
           const ls = data.list;
           if(ls.length!=0){
            let lat = ls[0].coord.lat;
            let long = ls[0].coord.lon;
            const url =`http://www.openstreetmap.org/export/embed.html?bbox=${long}%2C${lat}%2C${long}%2C${lat}&amp;layers=ND`;
            return <>
            <iframe width="40%" 
                height="250" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src={url}/>
                {ls.map((i,index)=>{
                 if(index==0)
                    return<>
                      <Card key ={index}sx={{ width:500,display: 'inline-block',maxWidth: 345,float:"right"}}>
                            <Typography variant="h5" component="div">City: {i.name}<br/>latitude :{i.coord.lat}<br/>longitude :{i.coord.lon}</Typography>
                            <Typography variant="h5" component="div">Country: {i.sys.country}</Typography>
                            <Typography variant="h5" component="div">wind speed{i.wind.speed}<br/>degree :{i.wind.deg}</Typography>
                            <Typography variant="h5" component="div">pressure {i.main.pressure}, sealevel:{i.main.sea_level}, ground level:{i.main.grnd_level}, <br/>Temperature{i.main.temp/10}.C</Typography>
                    </Card>
                    </>
                })}
            </>
           }
            else{
                return <>
                <Card >
                    <Typography> Not found the city named {input}</Typography>
                </Card>
                </>
            }
        }else{
            return <>
            <p>
           Welcome to Weather application, type a city name to find current weather details
           </p>
            </>
        }
         
    }
    return <>
        <div class="left-component">
                <TextField sx={{width:200}}id="outlined-basic"label="City name" variant="outlined" onChange={getInput}></TextField>
                <Button sx={{}}variant="contained"onClick={btnHandler}>Search</Button>
        </div>
        <div class="right-component">
            {out()}
        </div>
       
   
    </>
}