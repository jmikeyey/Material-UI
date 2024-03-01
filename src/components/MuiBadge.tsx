import { Mail } from "@mui/icons-material";
import { Badge, Stack, Avatar } from "@mui/material";
import React from "react";

const MuiBadge = () => {
    return (
        <Stack spacing={2} direction="row">
            <Badge badgeContent={5} color="primary">
                <Mail />
            </Badge>
            <Badge badgeContent={0} color="secondary" showZero>
                <Mail />
            </Badge>
            <Badge badgeContent={1000} color="info" showZero max={999}>
                <Mail />
            </Badge>
            <Badge
                variant="dot"
                color="success"
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
            >
                <Mail />
            </Badge>
        </Stack>
    );
};

export default MuiBadge;
