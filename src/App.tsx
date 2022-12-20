import {ThemeProvider} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from './utils/theme';
import MainPage from "./pages/Main";
import SigninPage from "./pages/Signin";
import RegisterPage from "./pages/Register";
import HistoryPage from "./pages/History";
import TestPage from "./pages/Test";
import UserPage from "./pages/User";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
              <Route path={'/'} element={<MainPage />} />
              <Route path={'/register'} element={<RegisterPage />} />
              <Route path={'/signin'} element={<SigninPage />} />
              <Route path={'/histories'} element={<HistoryPage />} />
              <Route path={'/dashboard'} element={<DashBoard />} />
              <Route path={'/users'} element={<UserPage />} />
              <Route path={'/test'} element={<TestPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
