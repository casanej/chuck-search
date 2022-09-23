export interface ChuckNorrisJoke {
    categories: ChuckNorrisCategory[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

export interface ChuckNorrisSearch {
    total: number;
    result: ChuckNorrisJoke[];
}

export interface ChuckNorrisResponsePaginated {
    total: number;
    result: ChuckNorrisJoke[][];
    totalPages: number;
}

export type ChuckNorrisCategory = "animal" | "career" | "celebrity" | "dev" | "explicit" | "fashion" | "food" | "history" | "money" | "movie" | "music" | "political" | "religion" | "science" | "sport" | "travel";