import './App.css';
import {AppBar, Toolbar, Typography,Stack} from '@mui/material'
import { styled } from '@mui/material/styles';
import GpsComponent from './componets/GpsComponent';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import CityComponent from './componets/CityComponent';
import './custom.css'
import { Link } from 'react-router-dom';
export default function App(){
    return<>
   
   
    <BrowserRouter>
    <div class="header">
        <a href="/" class="logo">weather application</a>
        <div class="header-right">
        <Link to="/city"  style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>City</Link>
        <Link to="/gps"style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Gps</Link>
        <Link to="/docs"style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Documentation</Link>
        <Link to="/about"style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        </div>
     </div>
    <Routes>
        <Route path="/gps" exact Component={GpsComponent}/>
        <Route path="/city" exact Component={CityComponent}/>
        </Routes>
    </BrowserRouter>
    
    </>
};
