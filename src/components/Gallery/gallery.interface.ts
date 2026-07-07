
export type GalleryProps = {
    readonly cols: number;
    readonly images: ReadonlyArray<GalleryImage>;
};

export type GalleryImage = {
    id: string;
    alt: string;
    src: string;
};

export type GalleryCategory = {
    name: string;
    images: GalleryImage[];
};