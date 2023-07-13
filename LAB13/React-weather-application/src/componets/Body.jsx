import { CssBaseline } from "@mui/material"
import React from "react"
import Paper from '@mui/material/Paper';
import { Box ,Typography,Button,TextField} from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";
export default ({get})=>{
    const[latitude,setlatitude]= useState("");
    const[longitude,setLongitude]= useState("");
    const buttonHandler=()=>{
        setlatitude("44.34");
        setLongitude("10.99");
        get(latitude,longitude);
    }
    return <>
      <Box sx={{
          paddingLeft:10,
      }}>
         <Stack direction="row" spacing={10}>
            <TextField id="standard-basic" label="City Name" variant="standard" />
            <Button variant="contained"sx={{height:40,width:200}} >Select a City</Button>
            <Button variant="contained"sx={{height:40,width:200}}>Use GPS</Button>
         </Stack>
         <Stack direction="row" spacing={10} sx={{paddingTop:2,paddingLeft:30}}>
            <Button variant='contained'sx={{width:320,height:30,textAlign:"center"}}onClick={buttonHandler}>search</Button>
         </Stack>
      </Box>
      <CssBaseline />
    </>
}