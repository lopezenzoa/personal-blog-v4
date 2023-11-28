import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import {
    Card,
    Container,
    CardActions,
    CardContent,
    Button,
    Typography,
    CircularProgress,
    Box
} from '@mui/material';

function HomePage() {
    const { data: blogs, isPending, error } = useFetch("http://localhost:5000/blogs");

    return (
        <Container sx={{ marginY: "2rem", minHeight: '100vh' }}>
            {blogs && (
                <Box>
                    {blogs.map((blog) => (
                        <Card sx={{ minWidth: 275, marginBottom: "0.5rem" }} key={blog.id}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {blog.published}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2">
                                    {blog.snippet}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={"/blogs/" + blog.id}>
                                    <Button size="small">Read More</Button>
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

export default HomePage;