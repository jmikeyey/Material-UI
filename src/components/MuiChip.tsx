import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

const MuiChip = () => {

    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (toDelete: string) => {
        setChips(chips => chips.filter((c) => c !== toDelete))
    }
    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip" color="primary" size="small" icon={<Face />} />
            <Chip
                label="Chip Outlined"
                color="secondary"
                size="small"
                variant="outlined"
                avatar={<Avatar>V</Avatar>}
            />
            <Chip
                label="Click"
                color="success"
                onClick={() => alert("succes")}
            />
            <Chip
                label="Delete"
                color="error"
                onClick={() => alert("succes")}
                onDelete={()=>alert("Delete")}
            />
            {
                chips.map((chip)=>(
                    <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
                ))
            }
        </Stack>
    );
};

export default MuiChip;
