// import { describe, it, beforeEach } from "node:test";
// import assert from "node:assert/strict";

// import { GalleryService } from "./gallery.service.ts";

// const make = (modules: Record<string, string> = {}) =>
//     new GalleryService({ modules });

// describe("GalleryService — stripOrderPrefix", () => {
//     const svc = make();

//     it("retire un préfixe avec underscore", () => {
//         assert.equal(svc.stripOrderPrefix("01_illustration"), "illustration");
//     });

//     it("retire un préfixe avec tiret, point ou espace", () => {
//         assert.equal(svc.stripOrderPrefix("02-digitale"), "digitale");
//         assert.equal(svc.stripOrderPrefix("3.sketch"), "sketch");
//         assert.equal(svc.stripOrderPrefix("10 final"), "final");
//     });

//     it("gère les nombres à plusieurs chiffres", () => {
//         assert.equal(svc.stripOrderPrefix("100_abc"), "abc");
//     });

//     it("laisse intact un nom sans préfixe", () => {
//         assert.equal(svc.stripOrderPrefix("illustration"), "illustration");
//     });

//     it("ne retire pas les chiffres au milieu/fin du nom", () => {
//         assert.equal(svc.stripOrderPrefix("art2024"), "art2024");
//     });

//     it("gère une chaîne vide", () => {
//         assert.equal(svc.stripOrderPrefix(""), "");
//     });

//     it("respecte une configuration de séparateurs personnalisée", () => {
//         const custom = new GalleryService({ modules: {}, prefixSeparators: "_" });
//         // Seul "_" est accepté comme séparateur ici
//         assert.equal(custom.stripOrderPrefix("01_abc"), "abc");
//         assert.equal(custom.stripOrderPrefix("01-abc"), "01-abc");
//     });
// });

// describe("GalleryService — formatTitle", () => {
//     const svc = make();

//     it("capitalise et remplace les underscores par des espaces", () => {
//         assert.equal(svc.formatTitle("illustration_digitale"), "Illustration digitale");
//     });

//     it("strippe le préfixe numérique avant formatage", () => {
//         assert.equal(
//             svc.formatTitle("01_illustration_traditionelle"),
//             "Illustration traditionelle"
//         );
//     });

//     it("normalise les séparateurs multiples", () => {
//         assert.equal(svc.formatTitle("foo___bar"), "Foo bar");
//         assert.equal(svc.formatTitle("02-mon-dossier"), "Mon dossier");
//     });

//     it("met le reste en minuscules", () => {
//         assert.equal(svc.formatTitle("HELLO_WORLD"), "Hello world");
//     });

//     it("renvoie une chaîne vide pour un input vide ou préfixe seul", () => {
//         assert.equal(svc.formatTitle(""), "");
//         assert.equal(svc.formatTitle("01_"), "");
//     });
// });

// describe("GalleryService — parseImageName", () => {
//     const svc = make();

//     it("retire l'extension et le préfixe", () => {
//         assert.deepEqual(svc.parseImageName("01_artbook.jpg"), {
//             id: "artbook",
//             title: "Artbook",
//         });
//     });

//     it("gère plusieurs extensions courantes", () => {
//         assert.equal(svc.parseImageName("img.webp").id, "img");
//         assert.equal(svc.parseImageName("img.PNG").id, "img");
//         assert.equal(svc.parseImageName("img.jpeg").id, "img");
//     });

//     it("transforme tirets en espaces pour le title, garde-les dans l'id", () => {
//         assert.deepEqual(svc.parseImageName("02_black-is-beautiful.jpg"), {
//             id: "black-is-beautiful",
//             title: "Black is beautiful",
//         });
//     });

//     it("garde uniquement la dernière extension", () => {
//         assert.equal(svc.parseImageName("fichier.backup.jpg").id, "fichier.backup");
//     });

//     it("gère un fichier sans extension", () => {
//         assert.deepEqual(svc.parseImageName("readme"), {
//             id: "readme",
//             title: "Readme",
//         });
//     });
// });

// describe("GalleryService — getCategories", () => {
//     it("renvoie un tableau vide pour un mapping vide", () => {
//         assert.deepEqual(make().getCategories(), []);
//     });

//     it("groupe les images par sous-dossier", () => {
//         const svc = make({
//             "../assets/art_gallery/traditionelle/a.jpg": "/build/a.hash.jpg",
//             "../assets/art_gallery/traditionelle/b.jpg": "/build/b.hash.jpg",
//             "../assets/art_gallery/digitale/c.webp": "/build/c.hash.webp",
//         });

//         const result = svc.getCategories();
//         assert.equal(result.length, 2);
//         assert.equal(result.find((c) => c.name === "traditionelle")!.images.length, 2);
//         assert.equal(result.find((c) => c.name === "digitale")!.images.length, 1);
//     });

//     it("trie les catégories par préfixe numérique (ordre naturel)", () => {
//         const svc = make({
//             "../assets/art_gallery/10_z/a.jpg": "/a",
//             "../assets/art_gallery/2_b/a.jpg": "/a",
//             "../assets/art_gallery/01_a/a.jpg": "/a",
//         });

//         assert.deepEqual(
//             svc.getCategories().map((c) => c.name),
//             ["01_a", "2_b", "10_z"]
//         );
//     });

//     it("trie les images dans une catégorie par préfixe numérique", () => {
//         const svc = make({
//             "../assets/art_gallery/cat/10_z.jpg": "/z",
//             "../assets/art_gallery/cat/2_b.jpg": "/b",
//             "../assets/art_gallery/cat/01_a.jpg": "/a",
//         });

//         assert.deepEqual(
//             svc.getCategories()[0].images.map((i) => i.id),
//             ["a", "b", "z"]
//         );
//     });

//     it("formate le titre de chaque catégorie", () => {
//         const svc = make({
//             "../assets/art_gallery/01_illustration_digitale/x.jpg": "/x",
//         });
//         const cat = svc.getCategories()[0];
//         assert.equal(cat.slug, "01_illustration_digitale");
//         assert.equal(cat.title, "Illustration digitale");
//     });

//     it("ne strippe pas si les chiffres ne sont pas suivis d'un séparateur autorisé", () => {
//         // Avec sep par défaut, "-" est autorisé donc strippé.
//         const def = make();
//         assert.equal(def.stripOrderPrefix("01-abc"), "abc");

//         // Avec sep limité à "_", "-" n'est plus autorisé donc rien n'est strippé.
//         const custom = new GalleryService({ modules: {}, prefixSeparators: "_" });
//         assert.equal(custom.stripOrderPrefix("01-abc"), "01-abc");
//         assert.equal(custom.stripOrderPrefix("01_abc"), "abc");
//     });

//     it("expose id, title et src pour chaque image, sans champ interne", () => {
//         const svc = make({
//             "../assets/art_gallery/cat/01_artbook.jpg": "/build/artbook.hash.jpg",
//         });
//         const img = svc.getCategories()[0].images[0] as Record<string, unknown>;

//         assert.deepEqual(img, {
//             id: "artbook",
//             title: "Artbook",
//             src: "/build/artbook.hash.jpg",
//         });
//         assert.equal("_raw" in img, false);
//     });

//     it("ignore silencieusement un chemin invalide", () => {
//         const svc = make({
//             "orphan.jpg": "/orphan",
//             "../assets/art_gallery/cat/ok.jpg": "/ok",
//         });
//         const result = svc.getCategories();
//         assert.equal(result.length, 1);
//         assert.equal(result[0].slug, "cat");
//     });

//     it("gère un scénario complet de bout en bout", () => {
//         const svc = make({
//             "../assets/art_gallery/01_traditionelle/02_skater.webp": "/skater",
//             "../assets/art_gallery/01_traditionelle/01_artbook.jpg": "/artbook",
//             "../assets/art_gallery/02_digitale/01_fishbowl.webp": "/fishbowl",
//             "../assets/art_gallery/02_digitale/02_fabulous.jpg": "/fabulous",
//         });

//         assert.deepEqual(svc.getCategories(), [
//             {
//                 slug: "01_traditionelle",
//                 title: "Traditionelle",
//                 images: [
//                     { id: "artbook", title: "Artbook", src: "/artbook" },
//                     { id: "skater", title: "Skater", src: "/skater" },
//                 ],
//             },
//             {
//                 slug: "02_digitale",
//                 title: "Digitale",
//                 images: [
//                     { id: "fishbowl", title: "Fishbowl", src: "/fishbowl" },
//                     { id: "fabulous", title: "Fabulous", src: "/fabulous" },
//                 ],
//             },
//         ]);
//     });
// });

// describe("GalleryService — cache et API utilitaire", () => {
//     let svc: GalleryService;

//     beforeEach(() => {
//         svc = make({
//             "../assets/art_gallery/cat/a.jpg": "/a",
//             "../assets/art_gallery/cat/b.jpg": "/b",
//         });
//     });

//     it("mémoïse les catégories entre deux appels", () => {
//         const first = svc.getCategories();
//         const second = svc.getCategories();
//         assert.strictEqual(first, second); // même référence
//     });

//     it("clearCache() force une reconstruction", () => {
//         const first = svc.getCategories();
//         svc.clearCache();
//         const second = svc.getCategories();
//         assert.notStrictEqual(first, second); // référence différente
//         assert.deepEqual(first, second);       // mais contenu identique
//     });

//     it("getCategoryBySlug() renvoie la catégorie correspondante", () => {
//         const cat = svc.getCategoryBySlug("cat");
//         assert.ok(cat);
//         assert.equal(cat!.images.length, 2);
//     });

//     it("getCategoryBySlug() renvoie undefined pour un slug inconnu", () => {
//         assert.equal(svc.getCategoryBySlug("inexistant"), undefined);
//     });

//     it("getTotalImageCount() retourne la somme des images", () => {
//         assert.equal(svc.getTotalImageCount(), 2);
//     });
// });
