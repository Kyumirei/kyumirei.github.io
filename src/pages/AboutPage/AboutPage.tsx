import { Alert, Box, CircularProgress, Container } from "@mui/material";
import { useMarkdown } from "../../hooks/useMarkdown";
import MUIMarkdown from "../../components/MUIMarkdown/MUIMarkdown";

/**
 * About me page
 */
export default function AboutPage() {
  const { content: aboutRaw, loading, error } = useMarkdown("/content/about.md");

  return (
    <Container
      maxWidth="md"
      sx={{
        my: { xs: "8%", sm: "10%" },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 8
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          Failed to load page content.
          <br />
          {error.message}
        </Alert>
      )}

      {!loading && !error && !aboutRaw.trim() && <Alert severity="info">No content available.</Alert>}

      {!loading && !error && aboutRaw.trim() && <MUIMarkdown>{aboutRaw}</MUIMarkdown>}
    </Container>
  );
}
