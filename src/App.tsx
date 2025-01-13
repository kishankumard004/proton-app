import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ReactQueryProvider from "./utils/ReactQueryProvider";
import { ThemeProvider } from "@mui/material/styles";

import { useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { lightTheme, darkTheme } from "./theme"; // Import the themes
import ThemeToggle from "./models/ToggleTheme"; // Import the toggle component
import { useTheme } from "@emotion/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  return (
    <div>
      <ReactQueryProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
          <Router>
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/header" element={<Header />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ReactQueryProvider>
    </div>
  );
};

export default App;
