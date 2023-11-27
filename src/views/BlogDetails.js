import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Button,
    Box,
    Container,
    Typography,
    Stack
} from "@mui/material";

function BlogDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [blog, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                const found = data.filter((blog) => blog.id === Number(id))[0];

                if (found) {
                    setBlog(found);
                    setIsPending(false);
                }
            });
    }, [id]);

    return (
        <Container sx={{ marginY: "2rem", height: '100vh' }}>
            {isPending && (
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Loading Blog Details...
                </Typography>
            )}

            {blog && (
                <Box>
                    <Stack direction="row" spacing={2} sx={{ marginBottom: "1.5rem" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {blog.title}
                        </Typography>
                        <Button variant="text" onClick={() => navigate(-1)}>Go Back</Button>
                    </Stack>

                    <Box sx={{ flexGrow: 1, textAlign: "justify" }}>
                        <Typography component="p" sx={{ marginBottom: "0.5rem", flexGrow: 1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus. Nulla facilisi etiam dignissim diam quis enim lobortis. Ipsum dolor sit amet consectetur adipiscing elit. Amet purus gravida quis blandit turpis. Purus sit amet volutpat consequat mauris. Mattis pellentesque id nibh tortor id aliquet lectus. Dui ut ornare lectus sit amet est placerat in egestas. Id volutpat lacus laoreet non curabitur gravida. Semper eget duis at tellus at urna condimentum mattis. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Aliquet risus feugiat in ante metus dictum at. Amet purus gravida quis blandit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Proin nibh nisl condimentum id.
                        </Typography>
                        <Typography component="p" sx={{ marginBottom: "0.5rem", flexGrow: 1 }}>
                            Vel eros donec ac odio. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. In mollis nunc sed id semper risus in hendrerit gravida. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Morbi quis commodo odio aenean sed. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Sem fringilla ut morbi tincidunt augue. Sem integer vitae justo eget magna fermentum iaculis eu non. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Congue quisque egestas diam in arcu cursus euismod quis viverra. Non diam phasellus vestibulum lorem sed risus ultricies. Amet massa vitae tortor condimentum lacinia quis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sem viverra aliquet eget sit amet tellus cras adipiscing. Cras adipiscing enim eu turpis.
                        </Typography>
                        <Typography component="p" sx={{ marginBottom: "0.5rem", flexGrow: 1 }}>
                            Consectetur lorem donec massa sapien faucibus et. Imperdiet nulla malesuada pellentesque elit eget. Ut etiam sit amet nisl purus. Pulvinar etiam non quam lacus suspendisse. Felis bibendum ut tristique et egestas. Risus pretium quam vulputate dignissim suspendisse in est ante. Faucibus turpis in eu mi bibendum neque. Quis commodo odio aenean sed. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Turpis egestas sed tempus urna et. Massa id neque aliquam vestibulum morbi blandit cursus. Orci ac auctor augue mauris augue neque gravida in. Cras adipiscing enim eu turpis.
                        </Typography>
                        <Typography component="p" sx={{ marginBottom: "0.5rem", flexGrow: 1 }}>
                            Malesuada fames ac turpis egestas. Diam quam nulla porttitor massa id. Suspendisse ultrices gravida dictum fusce ut placerat orci. Sed risus pretium quam vulputate dignissim suspendisse in. Enim tortor at auctor urna nunc id cursus metus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus et malesuada fames ac turpis. Diam maecenas sed enim ut sem viverra aliquet eget. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat vivamus at augue eget arcu dictum varius. Malesuada fames ac turpis egestas. Tellus pellentesque eu tincidunt tortor. Placerat vestibulum lectus mauris ultrices eros in cursus. Donec ultrices tincidunt arcu non sodales neque sodales ut. Feugiat pretium nibh ipsum consequat nisl. At quis risus sed vulputate odio ut enim blandit volutpat.
                        </Typography>
                        <Typography component="p" sx={{ marginBottom: "0.5rem", flexGrow: 1 }}>
                            Scelerisque fermentum dui faucibus in ornare. In vitae turpis massa sed elementum. Dui vivamus arcu felis bibendum ut tristique et egestas. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Velit scelerisque in dictum non consectetur. Ultrices dui sapien eget mi proin sed. Odio eu feugiat pretium nibh ipsum consequat. Ac auctor augue mauris augue. Iaculis urna id volutpat lacus laoreet. Eget nunc lobortis mattis aliquam. Pharetra pharetra massa massa ultricies mi quis. Diam vulputate ut pharetra sit amet aliquam id.
                        </Typography>
                    </Box>
                </Box>
            )}
        </Container>
    );
}

export default BlogDetails;