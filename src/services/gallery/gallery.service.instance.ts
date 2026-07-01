import { GalleryService } from "./gallery.service";

/**
 * Singleton export
 */
const modules = import.meta.glob(
    "../../assets/art_gallery/*/*.{jpg,jpeg,png,webp,gif,svg,avif}",
    { eager: true, import: "default" }
) as Record<string, string>;

export const galleryService = new GalleryService({ modules });
