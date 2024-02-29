import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import { CatchingPokemon, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";

import React, { useState } from "react";

const MuiNavbar = () => {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    const open = Boolean(anchor)
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget)
        setMenuOpen(true);
    }
    const handleClose = () => {
        setAnchor(null)
        setMenuOpen(false);
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <CatchingPokemon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKEMON APP
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button 
                        color="inherit" 
                        id="resouces-button" 
                        onClick={handleClick}
                        aria-controle={
                            open ? 'resources-menu' : undefined
                        }
                        aria-haspopup='true'
                        aria-expanded={
                            open ? 'true' : undefined
                        }
                        endIcon={menuOpen ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                    >
                        Resources
                    </Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu 
                    id="resources-menu" 
                    anchorEl={anchor} 
                    open={open}
                    MenuListProps={
                        {'aria-labelledby': 'resources-button',}
                    }
                    onClose = {handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MuiNavbar;
