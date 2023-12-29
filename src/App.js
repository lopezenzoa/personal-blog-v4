import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import AppBar from "./components/AppBar";

// Pages
import Blogs from "./views/Blogs";
import Resources from "./views/Resources";
import NotFound from "./views/NotFound";
import BlogDetails from "./views/BlogDetails";

function App() {
  return (
    <Router>
      <AppBar />

      <Routes>
        <Route exact path="/" element={ <Blogs /> } />
        <Route exact path="/resources" element={ <Resources /> } />
        <Route exact path="/blogs/:id" element={ <BlogDetails /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
