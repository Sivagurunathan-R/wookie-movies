import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      text: {
        main : "#000"
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
