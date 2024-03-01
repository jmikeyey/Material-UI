import { Menu } from "@mui/icons-material";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";

const MuiDrawer = () => {
    const [isDrawer, setIsDrawer] = useState(false);

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Logo"
                onClick={() => setIsDrawer(true)}
            >
                <Menu />
            </IconButton>
            <Drawer
                anchor="left"
                open={isDrawer}
                onClose={() => setIsDrawer(false)}
            >
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Sidepanel
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};

export default MuiDrawer;
