import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />;
    }
);

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen((prev) => !prev);
    };
    return (
        <>
            <Button onClick={() => setOpen((prev) => !prev)}>Submit</Button>
            {/* <Snackbar
                message="Form submitted successfully"
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
            /> */}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity="success">
                    Form submited successfully!
                </SnackbarAlert>
            </Snackbar>
        </>
    );
};

export default MuiSnackbar;
