// src/hooks/useJson.ts
import { useEffect, useState } from "react";

/**
 * Fetch CMS JSON data
 */
export function useJson<T>(url: string) {
    const [content, setContent] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetch(url, { headers: { Accept: "application/json" } })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
                return res.json() as Promise<T>;
            })
            .then((data) => {
                if (!cancelled) setContent(data);
            })
            .catch((err) => {
                if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)));
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [url]);

    return { content, loading, error };
}
