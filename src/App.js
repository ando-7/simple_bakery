import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import bgImage from './img/bgImage.jpg'
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: '100vh',
        height: "100%"
      }}>

      <BrowserRouter basename="/">

        <Navbar />
        <Routes >
          <Route path="/"  element={<MainPage />}/> 
          <Route path="/about"  element={<About />}/> 
          <Route path="/career"  element={<Career />}/> 
          <Route path="/contact"  element={<Contact />}/> 
          <Route path="/product"  element={<Products />}/> 
        </Routes>
    </BrowserRouter>
  </Box>
  );
}

export default App;
