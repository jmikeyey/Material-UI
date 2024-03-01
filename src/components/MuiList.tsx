import { Mail } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import InboxIcon from '@mui/icons-material/Inbox';
const MuiList = () => {
    return (
        <Box sx={{ width: "360px", bgcolor: "#efefef" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                    <Mail />
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 1"/>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 2" secondary='Secondary text'/>
                </ListItem>
                <Divider />
                <ListItem>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 3" secondary='Secondary text'/>
                </ListItem>
            </List>
        </Box>
    );
};
export default MuiList;
