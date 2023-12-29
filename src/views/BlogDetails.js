import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
    Button,
    Box,
    Container,
    Typography,
    Stack,
    CircularProgress
} from "@mui/material";

function BlogDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data: blog, isPending, error } = useFetch("http://localhost:5000/blogs/" + id);

    return (
        <Container sx={{ marginY: "2rem", height: '100vh' }}>
            {blog && (
                <Box>
                    <Stack direction="row" spacing={2} sx={{ marginBottom: "1.5rem" }}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {blog.title}
                        </Typography>
                        <Button variant="text" onClick={() => navigate(-1)}>Go Back</Button>
                    </Stack>

                    <Box sx={{ flexGrow: 1, textAlign: "justify" }}>
                        {Object.entries(blog.body).map((paragraph) => (
                            <Typography
                                component="p"
                                sx={{ marginBottom: "1.5rem", flexGrow: 1 }}
                                key={paragraph[0]}
                            >
                                {paragraph[1]}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            )}

            {isPending && (
                <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Typography color="error" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {error}
                </Typography>
            )}
        </Container>
    );
}

export default BlogDetails;