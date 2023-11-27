import { useState } from "react";
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button
} from "@mui/material";

export default function MenuAppBar() {
    const [header, setHeader] = useState("Home");

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {header}
                    </Typography>
                    <Box>
                        <Link to="/">
                            <Button
                                variant="text"
                                color="inherit"
                                sx={{ color: "#ffffff" }}
                                onClick={() => setHeader("Home")}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to="/latest">
                            <Button
                                variant="text"
                                color="inherit"
                                sx={{ marginX: "0.5rem", color: "#ffffff" }}
                                onClick={() => setHeader("Latest Blogs")}
                            >
                                Latest Blogs
                            </Button>
                        </Link>
                        <Link to="/resources">
                            <Button
                                variant="text"
                                color="inherit"
                                sx={{ color: "#ffffff" }}
                                onClick={() => setHeader("Resources")}
                            >
                                Resources
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}