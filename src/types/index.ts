export type BoycottList = {
    id: number;
    name: string;
    img_url: string;
    categories: string[];
    desc: string;
    proof_link: string;
    alternatives: string[];
};
export type CategoriesList = {
    id: number;
    value: string;
    label: string;
    icon: React.ReactNode;
};

export type SiteConfig = {
    title: string
    name:string
    description: string
    url: string
    ogImage: string
    links: {
        github: string
    }
    keywords:string[],
}


export interface Emoji {
  id: number;
  count: number;
}