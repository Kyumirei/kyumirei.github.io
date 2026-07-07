// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from "react";

interface Options extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}
/**
 * React hook that uses the Intersection Observer API to determine if an element is visible in the viewport.
 */
export function useIntersectionObserver<T extends Element>({
    root = null,
    rootMargin = "300px", // start loading before it hits the viewport
    threshold = 0,
    freezeOnceVisible = true,
}: Options = {}) {
    const ref = useRef<T | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || (freezeOnceVisible && isIntersecting)) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { root, rootMargin, threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [root, rootMargin, threshold, freezeOnceVisible, isIntersecting]);

    return { ref, isIntersecting };
}
