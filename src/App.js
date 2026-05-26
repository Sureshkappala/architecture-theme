import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/about"
element={<About />}
/>

<Route
path="/services"
element={<Services />}
/>

<Route
path="/projects"
element={<Projects />}
/>

<Route
path="/blog"
element={<Blog />}
/>

<Route
path="/team"
element={<Team />}
/>

<Route
path="/contact"
element={<Contact />}
/>

<Route
path="/login"
element={<Login />}
/>

<Route
path="*"
element={<NotFound />}
/>

</Routes>

<Footer />

</BrowserRouter>

);

}

export default App;