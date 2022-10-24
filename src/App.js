import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
function App() {
  return (
    <Router>
      <Navbar
        logoImg={
          "https://raw.githubusercontent.com/machadop1407/react-website-tutorial/main/src/assets/pizzaLogo.png"
        }
        NavLinks={[
          { to: "/", text: "Home" },
          { to: "/menu", text: "Menu" },
          { to: "/about", text: "About" },
          { to: "/contact", text: "Contact" },
        ]}
        navbg="black"
        navTextColor="white"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
