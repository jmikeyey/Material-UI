import {
    Box,
    FormControlLabel,
    Switch,
    FormLabel,
    FormControl,
    FormGroup,
    FormHelperText,
} from "@mui/material";
import { useState } from "react";

const skills = ['html', 'css', 'javascript']
const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    const [checkSkills, setCheckSkills] = useState<string[]>([])

    console.log({ checked });
    console.log({checkSkills})

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked((prev) => !prev); // my way
        setChecked(e.target.checked);
    };

    const groupSwitch = (skill: string) => () => {
    if (checkSkills.includes(skill)) {
        setCheckSkills(checkSkills.filter(s => s !== skill));
    } else {
        setCheckSkills([...checkSkills, skill]);
    }
    };
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="Dark Mode"
                    control={<Switch checked={checked} onChange={handleSwitch} />}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        {
                            skills.map((skill, i) => (
                                <FormControlLabel
                                    key={i}
                                    label={skill.toUpperCase()}
                                    value={skill}
                                    control={
                                        <Switch
                                            checked={checkSkills.includes(skill)}
                                            onChange={groupSwitch(skill)}
                                            size="small"
                                            color="success"
                                        />
                                    }
                                />
                            ))
                        }
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiSwitch;
