import { useEffect, useState } from "react";

interface UseMarkdownResult {
    content: string;
    loading: boolean;
    error: Error | null;
}

/**
 * Fetch markdown files
 */
export function useMarkdown(path: string): UseMarkdownResult {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(path);

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch markdown file: ${response.status}`
                    );
                }

                const text = await response.text();

                if (!cancelled) {
                    setContent(text);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err : new Error("Unknown error"));
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, [path]);

    return { content, loading, error };
}