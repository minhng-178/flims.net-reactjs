import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { Tooltip, IconButton, Button } from "@mui/material";

import Footer from "./components/Footer";
import Main from "./components/Main";
import DetailFlims from "./components/DetailFlims";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About";
import News from "./components/News";
import { ThemeContext } from "./components/ThemeContex";
import Add from "./components/Add";
import Login from "./components/Login";
import Protected from "./components/Protected";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import Dashboard from "./components/Dashboard";
import Edit from "./components/Edit";

function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navigation />
      {/* <div style={{ position: "relative" }}>
        <Tooltip title={`Switch to ${!dark ? "Dark" : "Light"} mode`}>
          <IconButton
            onClick={toggle}
            data-testid="toggle-theme-btn"
            style={{ position: "absolute", right: "10px" }}
          >
            {!dark ? (
              <Button
                sx={{ color: "black" }}
                variant="outlined"
                endIcon={
                  <LightModeIcon fontSize="large" sx={{ color: "black" }} />
                }
              >
                Light On
              </Button>
            ) : (
              <Button
                sx={{ color: "white" }}
                variant="outlined"
                endIcon={
                  <ModeNightIcon fontSize="large" sx={{ color: "white" }} />
                }
              >
                Light Off
              </Button>
            )}
          </IconButton>
        </Tooltip>
      </div> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detailflims" element={<DetailFlims />} />
        <Route
          path="/add"
          element={
            <Protected>
              <Add />
            </Protected>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/edit"
          element={
            <Protected>
              <Edit />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
