import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./components/App/App.tsx";
import { theme } from "./constants/theme.ts";

/**
 * React root with boring stuff like the MUI theme provider
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </StrictMode>
);
