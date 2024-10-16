import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ReactQueryProvider from "./utils/ReactQueryProvider";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import { CssBaseline, FormControlLabel, Switch } from "@mui/material";
import { useTheme } from "@emotion/react";
function App() {
  const theme = useTheme();
  const [isDark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!isDark);
  };
  return (
    <div>
      <ReactQueryProvider>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <CssBaseline />
          <div style={{ padding: "20px" }}>
            <FormControlLabel
              control={<Switch checked={isDark} onChange={toggleTheme} />}
              label={isDark ? "Dark Mode" : "Light Mode"}
            />
          </div>
          <Router>
            <Routes>
              <Route path="/ele" element={<Dashboard />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ReactQueryProvider>
    </div>
  );
}

export default App;
