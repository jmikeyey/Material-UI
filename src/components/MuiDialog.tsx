import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open a dialog</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        Are you sure you want to submit the test? You can edit
                        after submitting
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MuiDialog;
