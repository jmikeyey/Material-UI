import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    CardMedia,
    Button,
} from "@mui/material";

const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia 
                    component='img' 
                    height='160' 
                    image="https://source.unsplash.com/random"
                    alt="unsplash image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>
                    <Typography variant="body2" color="texzt.secondary">
                        React is a JavaScript library for building user
                        interfaces. React can be used as a base in the
                        development opf single-page or mobile applications
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">
                        Share
                    </Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default MuiCard;
