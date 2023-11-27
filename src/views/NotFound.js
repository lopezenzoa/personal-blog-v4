import { Container, Typography } from "@mui/material";

function NotFoundPage() {
    return (
        <Container sx={{ marginY: "2rem", height: '100vh' }}>
            <Typography color="error" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Oops! Page not found
            </Typography>
        </Container>
    );
}

export default NotFoundPage;