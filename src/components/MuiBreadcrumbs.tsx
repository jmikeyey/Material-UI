import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadcrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label="breadcrumbs"
                separator={<NavigateNext fontSize="small" />}
                maxItems = {3}
                itemsBeforeCollapse={2}
            >
                <Link underline="hover" href="#">
                    Home
                </Link>
                <Link underline="hover" href="#">
                    Catalog
                </Link>
                <Link underline="hover" href="#">
                    Accessories
                </Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
        </Box>
    );
};

export default MuiBreadcrumbs;
