import { Print, Share, FileCopyOutlined, Edit } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import React from "react";
const MuiSpeedDial = () => {
    return (
        <SpeedDial
            ariaLabel="navigation speed dial"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<Edit />} />}
        >
            <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle='Copy' tooltipOpen />
            <SpeedDialAction icon={<Print />} tooltipTitle='Print'  tooltipOpen/>
            <SpeedDialAction icon={<Share />} tooltipTitle='Share'  tooltipOpen/>
        </SpeedDial>
    );
};

export default MuiSpeedDial;
