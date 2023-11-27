import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    Container,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box
} from '@mui/material';

function HomePage() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            });
    }, []);

    return (
        <Container sx={{ marginY: "2rem", minHeight: '100vh' }}>
            {isPending && (
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Loading Blogs...
                </Typography>
            )}

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
        </Container>
    );
}

export default HomePage;