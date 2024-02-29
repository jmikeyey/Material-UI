import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    RadioGroup,
    Radio,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
    const [radioChoice, setRadioChoice] = useState("");
    console.log({radioChoice});
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioChoice(e.target.value)
    };
    return (
        <Box>
            <FormControl error>
                <FormLabel id="job-experience-group-label">
                    Years of Experience
                </FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    aria-label="job-experience-group-label"
                    value= {radioChoice}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        control={<Radio size="small" color="secondary" />}
                        label="0-2"
                        value="0-2"
                    />
                    <FormControlLabel
                        control={<Radio size="small" color="secondary"/>}
                        label="3-5"
                        value="3-5"
                    />
                    <FormControlLabel
                        control={<Radio size="small" color="secondary" />}
                        label="6-10"
                        value="6-10"
                    />
                </RadioGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default MuiRadioButton;
