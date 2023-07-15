import { CssBaseline} from "@mui/material"
import React from "react"
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default ()=>{
    return <>
      <div className="sidebar" style={{width:50}}>
         <ul className="sidebar-nav">
            <li>
               <Link to="/city"  style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>City
               </Link>
            </li>
            <li>
               <Link to="/gps"style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Gps
               </Link>
            </li>
            <li>
               <Link to="/gps"style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Documentation
               </Link>
            </li>
            <li>
               <Link to="/gps"style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>About
               </Link>
            </li>
         </ul>
      </div>        
   </>
}