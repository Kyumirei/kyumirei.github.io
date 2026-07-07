// src/components/Gallery/LightboxGallery.tsx
import { useCallback, useState } from "react";
import { ImageList } from "@mui/material";
import { LazyImage } from "./LazyImage/LazyImage";
import { Lightbox } from "./Lightbox/Lightbox";
import type { GalleryProps, GalleryImage } from "./gallery.interface";

/**
 * A React component that displays a gallery of images in a lightbox format, allowing users to click on an image to view it in a larger modal.
 */
export function LightboxGallery({ cols, images }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const handleOpen = useCallback((img: GalleryImage) => setSelected(img), []);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <ImageList variant="masonry" cols={cols} gap={8}>
        {images.map((img, index) => (
          // <ImageListItem key={img.id}>
          <LazyImage key={img.id} src={img.src} alt={img.alt} eager={index < cols} onClick={() => handleOpen(img)} />
          // </ImageListItem>
        ))}
      </ImageList>
      <Lightbox image={selected} onClose={handleClose} />
    </>
  );
}
