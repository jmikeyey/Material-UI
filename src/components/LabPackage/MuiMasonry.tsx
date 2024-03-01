import { Expand, ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Paper,
    Typography,
} from "@mui/material";

const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const MuiMasonry = () => {
    return (
        <Box sx={{ width: 500, minHeight: 400 }}>
            <Masonry columns={4} spacing={1}>
                {heights.map((h, i) => (
                    <Paper
                        key={i}
                        sx={{
                            border: "1px solid",
                        }}
                    >
                        <Accordion sx={{ minHeight: h }}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Accordion {i + 1} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>Content</AccordionDetails>
                        </Accordion>
                    </Paper>
                ))}
            </Masonry>
        </Box>
    );
};

export default MuiMasonry;
