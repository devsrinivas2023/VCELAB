import {AppBar, Toolbar, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
export default ()=>{
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));
    return <>
    <StyledToolbar sx={{paddingTop:4}}>
        <AppBar position="static" sx={{height:70,borderRadius:32}}>
            <Typography variant="h5" component="div" sx={{ fontSize:50,paddingLeft:40 }}>weather application</Typography>
        </AppBar>
    </StyledToolbar>

    </>
}