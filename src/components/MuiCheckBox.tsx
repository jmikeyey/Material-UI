import BookmarkIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkBorderIcon from "@mui/icons-material/Bookmark";
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText
} from "@mui/material";
import { useState } from "react";


const MuiCheckBox = () => {
    const [checked, setChecked] = useState(false);
    const [language, setLanguage] = useState<string[]>([])
    console.log({ checked });
    console.log({ language });

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked(() => !checked) //my way haha i tot this way lol
        setChecked(e.target.checked);
    };

    const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = language.indexOf(e.target.value)
        if( index === -1 ){
            setLanguage([...language, e.target.value])
        } else{
            setLanguage(language.filter(lang => lang !== e.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept temrs and conditions"
                    control={
                        <Checkbox checked={checked} onChange={handleChecked} />
                    }
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkIcon />}
                    checkedIcon={<BookmarkBorderIcon />}
                    checked={checked}
                    onChange={handleChecked}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            value='html'
                            control={
                                <Checkbox size='small' color='secondary' checked={language.includes('html')} onChange={handleSelection} />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            value='css'
                            control={
                                <Checkbox size='small' color='secondary'checked={language.includes('css')} onChange={handleSelection} />
                            }
                        />
                        <FormControlLabel
                            label="JavaSript"
                            value='javascript'
                            control={
                                <Checkbox size='small' color='secondary'  checked={language.includes('javascript')} onChange={handleSelection} />
                            }
                        />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiCheckBox;
