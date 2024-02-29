import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

const MuiSelect = () => {

    const [countries, setCountry] = useState<string[]>([])
    console.log({countries});
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        console.log(typeof value);
        
        setCountry(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <Box width='250px'>
            <TextField 
                label='Select a country' 
                value={countries}
                onChange={handleChange}
                size="small"
                color="secondary"
                helperText="Please select your country"
                SelectProps={{
                    multiple: true,
                }}
                fullWidth
                select
                error
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect
