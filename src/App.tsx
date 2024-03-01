import "./App.css";
import MuiNavbar from "./components/MuiNavbar";
// import MuiImageList from './components/MuiImageList';
// import MuiAccordion from './components/MuiAccordion';
// import MuiCard from './components/MuiCard';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiLayout from './components/MuiLayout';
// import MuiRating from './components/MuiRating';
// import MuiSwitch from './components/MuiSwitch';
// import MuiCheckBox from './components/MuiCheckBox';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiSelect from './components/MuiSelect';
// import MuiButton from './components/MuiButton';
// import MuiTypography from './components/MuiTypography';
// import MuiTextField from './components/MuiTextField';
// import MuiLink from "./components/MuiLink"
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiAvatar from './components/MuiAvatar';
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
// import MuiChip from "./components/MuiChip";
// import MuiAlert from "./components/MuiAlert";
// import MuiSnackbar from "./components/MuiSnackbar";
// import MuiDialog from "./components/MuiDialog";
// import MuiProgress from "./components/MuiProgress";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiLoadingButton from "./components/LabPackage/MuiLoadingButton";
// import MuiTooltip from './components/MuiTooltip';
// import MuiTable from './components/MuiTable';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import MuiPicker from "./components/LabPackage/MuiPicker";
// import MuiTabs from "./components/LabPackage/MuiTabs";
// import MuiTimeline from "./components/LabPackage/MuiTimeline";
// import MuiMasonry from "./components/LabPackage/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { ThemeProvider, colors, createTheme } from "@mui/material";

const theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700]
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="App">
                    <MuiNavbar />
                    <MuiBreadcrumbs />
                    <MuiDrawer />
                    <MuiBadge />
                    <MuiList />
                    <MuiResponsiveness />
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
