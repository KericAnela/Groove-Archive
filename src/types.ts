export type Format = 'vinyl' | 'cassette' | 'CD';

export type Music = {
    title: string;
    artist: string;
    releaseYear: string;
    format: Format;
    rating: number;
    condition: number;
    image: string | null;
    notes?: string;
};