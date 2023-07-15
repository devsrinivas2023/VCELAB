import './App.css';
import {AppBar, Toolbar, Typography,Stack} from '@mui/material'
import { styled } from '@mui/material/styles';
import Body from './componets/Body';
import GpsComponent from './componets/GpsComponent';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import CityComponent from './componets/CityComponent';
export default function App(){
    return<>
     <AppBar position="static" sx={{height:70,borderRadius:32,marginTop:12,width:1000,marginLeft:6}}>
         <Typography variant="h5" component="div" sx={{ fontSize:50,paddingLeft:40 }}>weather application</Typography>
      </AppBar>
    <div>
    <BrowserRouter>
    <div class="home">
        <div class="left">
            <Body/>
        </div>
        <div class="right">
        <Routes>
                <Route path="/gps" exact Component={GpsComponent}/>
                <Route path="/city" exact Component={CityComponent}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
    </div>
    
    </>
};
