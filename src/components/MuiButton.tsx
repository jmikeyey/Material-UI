import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://google.com">
                    Text
                </Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Primary
                </Button>
                <Button variant="contained" color="error">
                    Primary
                </Button>
                <Button variant="contained" color="warning">
                    Primary
                </Button>
                <Button variant="contained" color="info">
                    Primary
                </Button>
                <Button variant="contained" color="success">
                    Primary
                </Button>
            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    disableRipple
                    onClick={()=>alert('Clicked')}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    disableElevation
                >
                    Send
                </Button>
                <IconButton aria-label="icon" color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default MuiButton;
