import { useEffect, useState } from "react";
import axios from 'axios';
import { useBeforeUnload, useLocation } from "react-router-dom";
export default ()=>{
   const [location, setLocation] = useState({ latitude: null, longitude: null });
   const[data,setData]=useState(null);
 const get=()=>{
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
                  const { latitude, longitude } = position.coords;
                  setLocation({ latitude, longitude });
            },(error) => {
                  console.error(error.message);
               }
         );
      } else {
      console.log("Geolocation is not supported by this browser.");
      }
 }
const loadData=async()=>{
   get();
   if(location.latitude!=null){
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=9de243494c0b295cca9337e1e96b00e2`
      axios.get(url).then((res)=>{
         setData((res.data));
   }).catch((error)=>{
      console.log(error);
   })
   }else{

   }
   
}
const set =()=>{
   
   if(data!==null){
      console.log(data.name)
   return <>
   <div className="gpsresults">
      <div className="title">
         <p>Showing results for {data.name} using :{data.coord.lat +","+data.coord.lon}</p>
      </div>
      <div className="">
      <p> Temperature {data.main.temp/10}.C feels like {data.main.feels_like/10}.c</p>
      <p> Minimum temperature {data.main.temp_min} ,temperature maximum{data.main.temp_max}</p>
      <p> wind speed {data.wind.speed}</p>
      </div>
   </div>
   </>
}
}
    return<>
 <div className="gps-component">
   <button onClick={loadData}>
      search
   </button>
    <p> GPS results</p>
   {set()}
 </div>
    </>
}