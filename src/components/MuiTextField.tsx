import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
const MuiTextField = () => {
    const [hides, sethides] = useState(true);
    const [password, setPassword] = useState(true);
    const [value, setValue] = useState("");

    const showHelperText = () => {
        sethides(false);
    };
    const hideHelperText = () => {
        sethides(true);
    };
    const handleShowPassword = () => {
        setPassword((prevType) => !prevType);
    };

    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Small Secondary"
                    size="small"
                    color="secondary"
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Form Input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    helperText={
                        !value
                            ? "Required"
                            : "Do not share your password with anyone"
                    }
                    required
                />
                <TextField
                    label="Password"
                    helperText="Do not share you password with everyone"
                    type="password"
                    disabled
                />
                <TextField label="Read Only " inputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end"> kg</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Password"
                    type={password ? `password` : `text`}
                    onFocus={showHelperText}
                    onBlur={hideHelperText}
                    helperText={!hides && "Don't share your password "}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                style={{ cursor: "pointer" }}
                            >
                                <VisibilityIcon onClick={handleShowPassword} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default MuiTextField;
