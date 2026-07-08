export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api/v1";

/**
 * Mock fetch — wraps static data in a resolved Promise.
 * Toutes les fonctions de src/lib/api/*.ts passent par ici tant que
 * l'API n'est pas branchée : remplacer mockFetch(...) par apiFetch(path)
 * suffira à basculer sur le vrai back.
 */
export async function mockFetch<T>(data: T, path: string): Promise<T> {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[API mock] GET ${path}`);
  }
  return Promise.resolve(data);
}

/**
 * Real fetch wrapper — appelle l'API (NestJS, même convention que topsy-api).
 * Le back enveloppe les réponses dans { data, timestamp, path } : on déballe.
 * Throws on non-2xx responses.
 */
export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...((options?.headers as Record<string, string>) ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    let message = body;
    try {
      const parsed = JSON.parse(body);
      message =
        parsed?.error?.message ?? parsed?.message ?? parsed?.error ?? body;
    } catch {
      // body wasn't JSON — keep raw text
    }
    if (typeof console !== "undefined") {
      console.error(
        `[API] ${options?.method ?? "GET"} ${url} failed with ${res.status}:`,
        body,
      );
    }
    throw new Error(typeof message === "string" ? message : String(message));
  }

  const json = await res.json();
  return (json && typeof json === "object" && "data" in json ? json.data : json) as T;
}
