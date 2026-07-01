import { useState } from "react";
import { Box, Container, Toolbar } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import { sideBarWidth } from "../../constants/common.constant";
import type { Page } from "./app.interface";

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

        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
      </Box>
    </Container>
  );
}

export default App;
