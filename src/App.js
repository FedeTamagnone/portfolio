/* ------------------------------ IMPORTACIONES ----------------------------- */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


//MÓDULOS
import Home from './components/home/Home.js';
import Contact from './components/contact/Contact.js';
import NavBar from './components/navBar/NavBar';

//ESTILOS
import "./App.css";


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="app" id={theme}>
          <div id="barra" className="switch">
        <NavBar />
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} onColor="#ffffff" onHandleColor="#1f1f1f" offHandleColor="#ffffff" offColor="#1f1f1f"/>
          </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;