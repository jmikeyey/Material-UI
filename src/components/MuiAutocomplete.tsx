import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skills  = {
    id: number;
    label: string;
}

const skill = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillsOptions = skill.map((s, i)=>({
    
    id: i + 1,
    label: s
    
}))
const MuiAutocomplete = () => {

    const [value, setValue] = useState<string | null >(null)
    const [skills, setskills] = useState<Skills | null>(null)
    
    console.log({value})
    console.log({skills})

    const handleChange = (e: any, newValue: string | null) => {
        setValue(newValue)
    }
    const handleChangeSkills = (e: any, newValue: Skills | null) => {
        setskills(newValue)
    }
    return (
        <Stack spacing={2} width="250px">
            <Autocomplete
                options={skill}
                renderInput={(params) => (
                    <TextField {...params} label="Skills" />
                )}
                value={value}
                onChange={handleChange}
                freeSolo
            />
            <Autocomplete
                options={skillsOptions}
                renderInput={(params) => (
                    <TextField {...params} label="Skills" />
                )}
                value={skills}
                onChange={handleChangeSkills}
            />
        </Stack>
    );
};

export default MuiAutocomplete;
