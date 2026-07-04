import { Box, Typography, type SxProps, type Theme } from "@mui/material";
import ReactMarkdown from "react-markdown";

interface MUIMarkdownProps {
  children: string;
  sx?: SxProps<Theme>;
}

/**
 * Renders Markdown content using Material UI components.
 */
export default function MUIMarkdown({ children, sx }: MUIMarkdownProps) {
  return (
    <Box sx={sx}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Typography variant="h1" gutterBottom>
              {children}
            </Typography>
          ),
          h2: ({ children }) => (
            <Typography
              variant="h2"
              //   gutterBottom
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },

                // mt: { xs: 2, md: 3 },
                mb: { xs: 3, md: 4 }
              }}
            >
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography
              variant="h3"
              //   gutterBottom

              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                mb: { xs: 3, md: 4 }
              }}
            >
              {children}
            </Typography>
          ),

          h4: ({ children }) => (
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                mb: { xs: 3, md: 4 }
              }}
            >
              {children}
            </Typography>
          ),

          h5: ({ children }) => (
            <Typography variant="h5" gutterBottom>
              {children}
            </Typography>
          ),

          h6: ({ children }) => (
            <Typography variant="h6" gutterBottom>
              {children}
            </Typography>
          ),

          p: ({ children }) => (
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                lineHeight: { xs: 1.6, md: 1.75 },
                mb: { xs: 2, md: 3 },
                textAlign: { xs: "left", md: "justify" }
              }}
            >
              {children}
            </Typography>
          )
        }}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
}
