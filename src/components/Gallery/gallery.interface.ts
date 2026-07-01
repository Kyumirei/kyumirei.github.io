export type GalleryProps = {
    readonly cols: number;
    readonly images: ReadonlyArray<{ id: string; title: string; src: string }>;
};