import { Typography } from "@mui/material"



const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">This is h1</Typography>
            <Typography variant="h2">This is h2</Typography>
            <Typography variant="h3" >This is h3</Typography>
            <Typography variant="h4" 
                        component="h1" 
                        gutterBottom>
                This is h4
            </Typography>
            <Typography variant="h5">This is h5</Typography>
            <Typography variant="h6">This is h6</Typography>

            <Typography variant="subtitle1">This is sub1</Typography>
            <Typography variant="subtitle2">This is sub2</Typography>

            <Typography variant="body1">This is body1</Typography>
            <Typography variant="body2">This is body2</Typography>
        </div>
    )
}

export default MuiTypography
