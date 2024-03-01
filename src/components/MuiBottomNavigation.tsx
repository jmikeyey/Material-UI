import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const getContent = () => {
        switch (value) {
            case 0:
                return <div>Home Content</div>;
            case 1:
                return <div>Favorite Content</div>;
            case 2:
                return <div>Person Content</div>;
            default:
                return null;
        }
    };

    return (
        <>
            {getContent()}
            <BottomNavigation
                sx={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    justifyContent: "space-around",
                }}
                value={value}
                onChange={handleChange}
                showLabels
            >
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Favorite" icon={<Favorite />} />
                <BottomNavigationAction label="Person" icon={<Person />} />
            </BottomNavigation>
        </>
    );
};

export default MuiBottomNavigation;
