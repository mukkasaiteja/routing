import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Aboutus from "./Pages/About Us";
import Contactus from "./Pages/Contact Us";
import Services from "./Pages/Service";
import Projects from "./Pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<Aboutus />} />
        <Route path="ContactUs" element={<Contactus />} />
        <Route path="Services" element={<Services />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;