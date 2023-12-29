import { Link } from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

function BlogPreview({ blog }) {
    return (
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
    );
}

export default BlogPreview;