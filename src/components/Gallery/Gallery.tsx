// import { ImageList, ImageListItem } from "@mui/material";
// import type { GalleryProps } from "./gallery.interface";

// /**
//  * Art gallery for the home page
//  */
// export function Gallery({ cols, images }: GalleryProps) {
//   return (
//     <ImageList variant="masonry" cols={cols} gap={8}>
//       {images.map((img) => (
//         <ImageListItem key={img.id}>
//           <img
//             srcSet={`${img.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${img.src}?w=248&fit=crop&auto=format`}
//             alt={img.alt}
//             loading="lazy"
//             style={{ display: "block", width: "100%", height: "auto" }}
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
