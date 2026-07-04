import { Alert, Box, CircularProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LightboxGallery } from "../../components/Gallery/LightboxGallery";
import type { GalleryCategory } from "../../services/gallery/interfaces/gallery.interface.ts";
import { useJson } from "../../hooks/useJson.ts";
import { useMemo } from "react";

type RawGalleryCategory = {
  readonly name: string;
  readonly images: { src: string; alt?: string }[];
};

type RawGalleryJson = Readonly<{ categorie: ReadonlyArray<RawGalleryCategory> }>;

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

  const { content, loading, error } = useJson<RawGalleryJson>("/content/gallery.json");

  const categories: GalleryCategory[] = useMemo(() => {
    if (!content?.categorie) return [];
    return content.categorie.map((c) => ({
      // title: c.name, // <-- map `name` to `title`
      name: c.name,
      images: (c.images ?? []).map((img) => ({
        id: img.src, // <-- src is stable & unique enough for a key
        src: img.src,
        // title: img.title,
        alt: img.alt ?? ""
      }))
    }));
  }, [content]);

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

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          Failed to load gallery.
          <br />
          {error.message}
        </Alert>
      )}

      {!loading && !error && categories.length === 0 && (
        <Alert severity="info">
          <i>Aucune catégorie disponible.</i>
        </Alert>
      )}

      {/* <Box sx={{ width: "100%" }}>
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
      </Box> */}
      {!loading && !error && categories.length > 0 && (
        <Box sx={{ width: "100%" }}>
          {categories.map((category) => (
            <Box key={category.name}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  mt: { xs: 2, md: 3 },
                  mb: { xs: 1, md: 2 }
                }}
              >
                {category.name}
              </Typography>
              {category.images.length > 0 ? (
                <LightboxGallery cols={cols} images={category.images} />
              ) : (
                <Alert severity="info">
                  <i>Pas d'images disponibles dans cette catégorie.</i>
                </Alert>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
