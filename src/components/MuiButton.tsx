import React, { useState } from "react";
import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"

const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log({formats })
    const handleFormatChange = (e: React.MouseEvent, updatedFormat: string | null) => {
        setFormats(updatedFormat || null)
    }
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
                    onClick={() => alert("Clicked")}
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
            <Stack direction="row">
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    size="small"
                    color="secondary"
                    aria-label="alignment button group"
                >
                    <Button onClick={() => alert("Left Clicked")}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup 
                    aria-label="text formatting" 
                    value={formats}
                    onChange={handleFormatChange}
                    size="small"
                    color="success"
                    orientation="vertical"
                    exclusive
                >
                    <ToggleButton value='bold' aria-label="bold" >
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label="underlined"> 
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                
            </Stack>
        </Stack>
    );
};

export default MuiButton;
