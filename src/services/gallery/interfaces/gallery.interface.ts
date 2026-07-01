export type GalleryImage = {
    id: string;
    title: string;
    src: string;
};

export type GalleryCategory = {
    slug: string;
    title: string;
    images: GalleryImage[];
};

export type GalleryServiceOptions = {
    /**
     * Mapping { chemin -> URL } typiquement fourni par
     * `import.meta.glob(..., { eager: true, import: "default" })`.
     */
    modules: Record<string, string>;
    /**
     * Séparateurs autorisés entre le préfixe numérique et le reste du nom.
     * Par défaut : `_`, `-`, `.`, espace.
     */
    prefixSeparators?: string;
};

export type InternalImage = GalleryImage & { _raw: string };
