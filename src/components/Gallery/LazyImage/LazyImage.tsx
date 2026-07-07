import { ImageListItem, Skeleton } from "@mui/material";
import { useState } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

interface LazyImageProps {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  aspectRatio?: number; // width / height
  eager?: boolean; // for above-the-fold images
  onClick?: () => void;
}

/**
 * A React component that lazily loads an image when it enters the viewport, with a skeleton placeholder while loading.
 */
export function LazyImage({ src, alt, srcSet, sizes, eager = false, onClick }: LazyImageProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLLIElement>();
  const [loaded, setLoaded] = useState(false);
  const shouldLoad = eager || isIntersecting;

  return (
    // <Box
    //   ref={ref}
    //   onClick={onClick}
    //   sx={{
    //     position: "relative",
    //     width: "100%",
    //     aspectRatio,
    //     overflow: "hidden",
    //     cursor: onClick ? "zoom-in" : "default",
    //     "&:hover img": onClick ? { opacity: 0.9 } : undefined
    //   }}
    // >

    <ImageListItem
      ref={ref}
      onClick={onClick}
      sx={{
        cursor: "zoom-in",
        "&:hover img": { opacity: 0.9 },
        transition: "opacity 0.2s"
      }}
    >
      {!loaded && <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />}
      {shouldLoad && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          style={{
            display: "block",
            width: "100%",
            height: "auto"
          }}
        />
      )}
      {/* </Box> */}
    </ImageListItem>
  );
}
