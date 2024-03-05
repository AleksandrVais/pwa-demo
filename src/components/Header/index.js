import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useLocation} from "react-router-dom";

export const Header = () => {
    const {pathname} = useLocation();

    const isShowBackButton = pathname !== '/'

    return <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                {isShowBackButton && <Button
                    variant="text"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    startIcon={<ArrowBackIcon/>}
                >
                    Back
                </Button>}
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
}
