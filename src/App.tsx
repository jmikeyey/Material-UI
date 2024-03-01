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
import MuiChip from "./components/MuiChip";
// import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import MuiProgress from "./components/MuiProgress";
// import MuiTooltip from './components/MuiTooltip';
// import MuiTable from './components/MuiTable';

function App() {
    return (
        <div className="App">
            <MuiNavbar />
            <MuiBreadcrumbs />
            <MuiDrawer />
            <MuiBadge />
            <MuiList />
            <MuiChip />
            <MuiSnackbar />
            <MuiDialog />
            <MuiProgress />
        </div>
    );
}

export default App;
