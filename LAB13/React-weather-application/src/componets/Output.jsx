import { Box, Typography ,Card} from "@mui/material"
export default (data)=>{
    console.log(data.data);
    if(data!==undefined)
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
                <Card sx={{ minWidth: 275 }}></Card>
            </Box>
        </>
}