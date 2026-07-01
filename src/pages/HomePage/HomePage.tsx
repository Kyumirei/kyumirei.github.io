import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LightboxGallery } from "../../components/Gallery/LightboxGallery";
import { galleryService } from "../../services/gallery/gallery.service.instance.ts";
import type { GalleryCategory } from "../../services/gallery/interfaces/gallery.interface.ts";
// TODO: configurable par CMS

// Évalué une seule fois au chargement du module
const categories: GalleryCategory[] = galleryService.getCategories();

/**
 * Home page with art gallery
 */
export default function HomePage() {
  const theme = useTheme();
  // Breakpoint-driven column count: 1 on phones, 2 on tablets, 3 on laptops, 4 on wide screens.
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const cols = isXs ? 1 : isSm ? 2 : isXl ? 4 : 3;

  return (
    <Box
      sx={{
        mt: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2, md: 3 },
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <Box component="header">
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem", lg: "4.5rem" },
            lineHeight: 1.1,
            wordBreak: "break-word"
          }}
        >
          Mes travaux
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        {categories.map((category) => (
          <Box key={category.slug}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                mt: { xs: 2, md: 3 },
                mb: { xs: 1, md: 2 }
              }}
            >
              {category.title}
            </Typography>
            <LightboxGallery cols={cols} images={category.images} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
