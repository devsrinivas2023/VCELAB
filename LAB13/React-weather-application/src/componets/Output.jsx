import { Box, Typography ,Card} from "@mui/material"
import { useEffect } from "react";
export default (longitude,latitude,city)=>{
   const isOk =()=>{
        return <>
        <Box   sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
        },
        paddingLeft:50,
        }}>
            <Card sx={{ minWidth: 275 }}> <Typography>{city}</Typography></Card>
        </Box>
    </>
    }
    const isnotOk=()=>{
        return <>
        not ok</>
    }
    useEffect(()=>{
        if(city===undefined){
            if(longitude!==undefined && latitude!=undefined){
                console.log("use action meet to search with GPS");
            }else{
                console.log("internal Error");
            }
        }else {
            console.log(city);
        }
    },[longitude,latitude]);       
}