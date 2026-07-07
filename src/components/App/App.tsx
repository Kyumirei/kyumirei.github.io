import { lazy, Suspense, useState } from "react";
import { Box, Container, Toolbar } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { sideBarWidth } from "../../constants/common.constant";
import type { Page } from "./app.interface";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const AboutPage = lazy(() => import("../../pages/AboutPage/AboutPage"));
/**
 * Main container for the other components
 */
function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column" }}>
      {/* Responsive permanent sidebar */}
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { xs: 0, md: sideBarWidth } // no offset on mobile
        }}
        component="main"
      >
        {/* Spacer that matches AppBar height — only on mobile */}
        <Toolbar sx={{ display: { xs: "block", sm: "none" } }} />

        {/* No fallback because it's additional code to load and also usually ugly */}
        <Suspense>
          {currentPage === "home" && <HomePage />}
          {currentPage === "about" && <AboutPage />}
        </Suspense>
      </Box>
    </Container>
  );
}

export default App;
