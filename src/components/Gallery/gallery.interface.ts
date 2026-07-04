import type { GalleryImage } from "../../services/gallery/interfaces/gallery.interface";

export type GalleryProps = {
    readonly cols: number;
    readonly images: ReadonlyArray<GalleryImage>;
};