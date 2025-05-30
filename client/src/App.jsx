import "./CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { Rooms } from "./pages/Rooms";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Facilities from "./pages/Facilities";
import { ContactUs } from "./pages/ContactUs";
import Error from "./pages/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
