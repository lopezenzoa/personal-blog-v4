import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Container,
    InputBase,
    Stack
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

export default function MenuAppBar() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Container>
                        <Stack direction="row">
                            <Box sx={{ flexGrow: 1 }}>
                                <Link to="/">
                                    <Button
                                        variant="text"
                                        color="inherit"
                                        sx={{ color: "#ffffff" }}
                                    >
                                        Home
                                    </Button>
                                </Link>
                                <Link to="/latest">
                                    <Button
                                        variant="text"
                                        color="inherit"
                                        sx={{ marginX: "0.5rem", color: "#ffffff" }}
                                    >
                                        Latest Blogs
                                    </Button>
                                </Link>
                                <Link to="/resources">
                                    <Button
                                        variant="text"
                                        color="inherit"
                                        sx={{ color: "#ffffff" }}
                                    >
                                        Resources
                                    </Button>
                                </Link>
                            </Box>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Stack>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}