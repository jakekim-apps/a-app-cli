import {ThemeProvider} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from './utils/theme';
import MainPage from "./pages/Main";
import SigninPage from "./pages/Signin";
import RegisterPage from "./pages/Register";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
              <Route path={'/'} element={<MainPage />} />
              <Route path={'/register'} element={<RegisterPage />} />
              <Route path={'/signin'} element={<SigninPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
