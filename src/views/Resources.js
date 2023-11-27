import { Container, Typography } from "@mui/material";

function Resources() {
    return (
        <Container sx={{ marginY: "2rem", height: '100vh' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Resources</Typography>
        </Container>
    );
}

export default Resources;