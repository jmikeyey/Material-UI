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
    Collapse 
} from "@mui/material";
import React, {useState} from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
const MuiList = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <Box sx={{ width: "360px", bgcolor: "#efefef" }}>
            <List dense={true}>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton>
                </List>
            </Collapse>

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
