import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { GalleryImage } from "../gallery.interface";

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

/**
 * A React component that displays a lightbox modal for viewing a single image in a gallery.
 */
export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <Dialog
      open={image !== null}
      onClose={onClose}
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
        onClick={onClose}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "common.white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" }
        }}
      >
        <CloseIcon />
      </IconButton>
      {/* FIXME: remettre ancien props */}
      {image && (
        <img
          src={image.src}
          alt={image.alt}

          style={{
            display: "block",
            maxWidth: "95vw",
            maxHeight: "95vh",
            width: "auto",
            height: "auto",
            objectFit: "contain"
          }}

          // style={{ maxHeight: "90vh", display: "block" }}
        />
      )}
    </Dialog>
  );
}
