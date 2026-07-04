import { useState } from "react";
import { Dialog, IconButton, ImageList, ImageListItem } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import type { GalleryProps } from "./gallery.interface";

/**
 * Art gallery for the home page with lightbox functionality. Clicking on an image opens it in a modal dialog for a larger view.
 */
export function LightboxGallery({ cols, images }: GalleryProps) {
  const [selected, setSelected] = useState<(typeof images)[number] | null>(null);

  const handleOpen = (img: (typeof images)[number]) => setSelected(img);
  const handleClose = () => setSelected(null);

  return (
    <>
      <ImageList variant="masonry" cols={cols} gap={8}>
        {images.map((img) => (
          <ImageListItem
            key={img.id}
            onClick={() => handleOpen(img)}
            sx={{
              cursor: "zoom-in",
              "&:hover img": { opacity: 0.9 },
              transition: "opacity 0.2s"
            }}
          >
            <img srcSet={`${img.src}`} src={`${img.src}`} alt={img.alt} loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={Boolean(selected)}
        onClose={handleClose}
        maxWidth={false}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              m: 0,
              maxWidth: "100vw",
              maxHeight: "100vh",
              borderRadius: 0
            }
          }
        }}
      >
        <IconButton
          aria-label="Fermer"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "common.white",
            backgroundColor: "rgba(0,0,0,0.4)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" }
          }}
        >
          <CloseIcon />
        </IconButton>

        {selected && (
          <img
            src={selected.src}
            alt={selected.alt}
            style={{
              display: "block",
              maxWidth: "95vw",
              maxHeight: "95vh",
              width: "auto",
              height: "auto",
              objectFit: "contain"
            }}
          />
        )}
      </Dialog>
    </>
  );
}
