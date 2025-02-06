export interface SonyGame {
    _id?: string | null | undefined;
    name: string | null;
    img: string | null | undefined;
    url: string | null;
    finalPrice: string | null;
    releaseDate: string | null ;
    originalPrice: string | null;
    discountDate: string | null | undefined;
    priority: string | null | undefined;
    tags: string[] | null;
}

export interface SonyForm {
    name?: string;
    url?: string;
    priority?: string;
}