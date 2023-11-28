import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    CircularProgress,
    Box
} from "@mui/material";

function Resources() {
    const { data: resources, isPending, error } = useFetch("http://localhost:5000/resources");

    return (
        <Container sx={{ marginY: "2rem", height: '100vh' }}>
            {resources && (
                <Box>
                    {resources.map((resource) => (
                        <Card variant="outlined" sx={{ minWidth: 275, marginBottom: "0.5rem" }} key={resource.id}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {resource.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {resource.type}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={resource.link} target="_blank">
                                    <Button size="small">Learn More</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            )}

            {isPending && (
                <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Typography color="error" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Oops! There was an error
                </Typography>
            )}
        </Container>
    );
}

export default Resources;