import './App.css';
import Box from '@mui/material/Box';
import Header from './componets/Header'
import Body from './componets/Body';
import Output from './componets/Output';
import { useState } from 'react';
import axios from 'axios';
export default function App(){
    const[latitude,setLatitude]=useState("");
    const[longitude,setLongitude]=useState("");
    const[data,setData]=useState([]);
    const getValue=(values)=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
           // console.log(pos.coords)
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        })
       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9de243494c0b295cca9337e1e96b00e2`)
       .then((res)=>{
         setData(res.data);
        })
        .catch((error)=>{
            console.log(error);
       })
    }
    return<>
        <Box  sx={{ flexGrow: 1 }}>
            <Header/>
            <Body get={getValue}/>
            <Output data={data}/>
        </Box>
    </>
};
