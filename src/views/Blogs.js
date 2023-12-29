import useFetch from "../hooks/useFetch";
import {
    Container,
    Typography,
    CircularProgress,
    Box
} from '@mui/material';
import BlogPreview from "../components/BlogPreview";

function Blogs() {
    const { data: blogs, isPending, error } = useFetch("http://localhost:5000/blogs");

    return (
        <Container sx={{ marginY: "2rem", minHeight: '100vh' }}>
            {blogs && (
                <Box>
                    {blogs.map((blog) => (
                        <BlogPreview blog={blog} />
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

export default Blogs;