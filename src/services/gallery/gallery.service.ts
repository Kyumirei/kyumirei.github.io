// import type { GalleryCategory, GalleryServiceOptions, InternalImage } from "./interfaces/gallery.interface";

// /**
//  * Image gallery parser service
//  */
// export class GalleryService {
//     private readonly modules: Record<string, string>;
//     private readonly prefixRegex: RegExp;
//     private cache: GalleryCategory[] | null = null;

//     constructor(options: GalleryServiceOptions) {
//         this.modules = options.modules;
//         const sep = options.prefixSeparators ?? "\\s._-";
//         this.prefixRegex = new RegExp(`^\\d+(?:[${sep}]+|$)`);
//     }

//     // --- API publique ---

//     /** Renvoie toutes les catégories (mémoïsé). */
//     getCategories(): GalleryCategory[] {
//         if (this.cache === null) {
//             this.cache = this.build();
//         }
//         return this.cache;
//     }

//     /** Trouve une catégorie par son name brut (ex: "01_illustration_digitale"). */
//     getCategoryByname(name: string): GalleryCategory | undefined {
//         return this.getCategories().find((c) => c.name === name);
//     }

//     /** Nombre total d'images chargées, toutes catégories confondues. */
//     getTotalImageCount(): number {
//         return this.getCategories().reduce((acc, c) => acc + c.images.length, 0);
//     }

//     /** Invalide le cache (utile en tests ou en cas de modules dynamiques). */
//     clearCache(): void {
//         this.cache = null;
//     }

//     // --- Helpers exposés pour les tests et l'extensibilité ---

//     stripOrderPrefix(name: string): string {
//         return name.replace(this.prefixRegex, "");
//     }

//     formatTitle(name: string): string {
//         const spaced = this.stripOrderPrefix(name).replace(/[_-]+/g, " ").trim();
//         if (!spaced) return "";
//         return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
//     }

//     parseImageName(filename: string): { id: string; title: string } {
//         const noExt = filename.replace(/\.[^.]+$/, "");
//         const clean = this.stripOrderPrefix(noExt);
//         const spaced = clean.replace(/[_-]+/g, " ").trim();
//         const title = spaced
//             ? spaced.charAt(0).toUpperCase() + spaced.slice(1)
//             : "";
//         return { id: clean, title };
//     }

//     // --- Logique interne ---

//     private build(): GalleryCategory[] {
//         const categoriesMap = new Map<string, InternalImage[]>();

//         for (const [path, src] of Object.entries(this.modules)) {
//             const parts = path.split("/");
//             if (parts.length < 2) continue;

//             const filename = parts[parts.length - 1];
//             const categoryname = parts[parts.length - 2];
//             const { id, title } = this.parseImageName(filename);

//             if (!categoriesMap.has(categoryname)) {
//                 categoriesMap.set(categoryname, []);
//             }
//             categoriesMap
//                 .get(categoryname)!
//                 .push({ id, title, src, _raw: filename });
//         }

//         return Array.from(categoriesMap.entries())
//             .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
//             .map(([name, images]) => ({
//                 name,
//                 title: this.formatTitle(name),
//                 images: images
//                     .sort((a, b) =>
//                         a._raw.localeCompare(b._raw, undefined, { numeric: true })
//                     )
//                     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//                     .map(({ _raw, ...img }) => img),
//             }));
//     }
// }
