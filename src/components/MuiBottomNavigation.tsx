import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

const MuiBottomNavigation = () => {

    const [value, setValue] = useState(0)
    const handleChange = (e: React.ChangeEvent<HTMLButtonElement>, newValue: number) => {
        setValue(newValue)
    }
    return (
        <BottomNavigation
            sx={{ width: "100%", position: "absolute", bottom: 0, display: 'flex', justifyContent: 'space-around' }}
            value={value}
            onChange={(e, newValue) => {setValue(newValue)}}
            showLabels
        >
            <BottomNavigationAction label='Home' icon={<Home />} />
            <BottomNavigationAction label='Favorite' icon={<Favorite />} />
            <BottomNavigationAction label='Person' icon={<Person />} />
        </BottomNavigation>
    );
};

export default MuiBottomNavigation;
