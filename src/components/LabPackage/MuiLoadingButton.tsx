import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

const MuiLoadingButton = () => {
    const loading: boolean = false;
    return (
        <Stack spacing={2} direction="row">
            <LoadingButton
                loading={loading ? true : undefined}
                variant="outlined"
            >
                Submit
            </LoadingButton>
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
            <LoadingButton variant="outlined" loadingIndicator="Loadin...">
                Fetch Data
            </LoadingButton>
            <LoadingButton
                loading
                variant="outlined"
                loadingIndicator="Loading..."
            >
                Fetch Data
            </LoadingButton>
            <LoadingButton
                variant="outlined"
                loadingIndicator="Loading..."
                loadingPosition="start"
                startIcon={<Save />}
            >
                Save
            </LoadingButton>
            <LoadingButton
                loading
                variant="outlined"
                loadingPosition="start"
                startIcon={<Save />}
            >
                Save
            </LoadingButton>
            <LoadingButton
                loading
                variant="outlined"
                loadingPosition="end"
                endIcon={<Save />}
            >
                Save
            </LoadingButton>
        </Stack>
    );
};

export default MuiLoadingButton;
