import { Button, TextField } from "@mui/material"
import { useState } from "react";
export default ()=>{
    const[input,setInput]=useState("");
    const[data,setData]=useState(null);
    const getInput=(e)=>{
        setInput(e.target.value);
    }
    return <>
    <div class="responce-nav">
        <TextField onChange={getInput}></TextField>
        <Button onClick={()=>{
            alert(input)
        }}>Search</Button>
        {data!==0&data}
    </div>
    </>
}