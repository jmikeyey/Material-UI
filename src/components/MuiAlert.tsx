import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity="error">This is an error alert</Alert>
            <Alert severity="warning">This is an warning alert</Alert>
            <Alert severity="info">This is an info alert</Alert>
            <Alert severity="success">This is an success alert</Alert>

            <Alert variant="outlined" severity="warning">
                <AlertTitle>Warning</AlertTitle>
                This is an warning alert
            </Alert>
            <Alert variant="outlined" severity="error">
                This is an error alert
            </Alert>
            <Alert variant="outlined" severity="info">
                This is an info alert
            </Alert>
            <Alert variant="outlined" severity="success">
                This is an success alert
            </Alert>

            <Alert variant="filled" severity="error" onClose={()=>alert('closed')}>
                <AlertTitle>Warning</AlertTitle>
                This is an warning alert
            </Alert>
            <Alert variant="filled" severity="warning">
                This is an warning alert
            </Alert>
            <Alert variant="filled" severity="info">
                This is an info alert
            </Alert>
            <Alert
                variant="filled"
                severity="success"
                icon={<Check fontSize="inherit" />}
                action={
                    <Button color='inherit' size='small'>UNDO</Button>
                }
                onClose={() => alert('closed')}
            >
                <AlertTitle>Success</AlertTitle>
                This is an success alert
            </Alert>
        </Stack>
    );
};

export default MuiAlert;
