const baseURL = (import.meta as any).env.VITE_API_BASE_URL;

if (!baseURL) {
  throw new Error("Missing VITE_API_BASE_URL");
}

export const BASE_URL = baseURL;