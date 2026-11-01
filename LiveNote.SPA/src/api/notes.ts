const BASE_URL = "/api/notes";

export interface Note {
    id: number;
    title: string;
    content: string;
    updatedAt: string;
}

async function request(url: RequestInfo, options?: RequestInit) {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.status == 204 ? null : await res.json();
}

export const getNotes = (): Promise<Note[]> => request(BASE_URL);
