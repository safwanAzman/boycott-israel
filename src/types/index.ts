export interface BoycottList {
    id: number;
    name: string;
    img_url: string;
    categories: string[];
    desc: string;
    proof_link: string;
    alternatives: string[];
};
export interface CategoriesList {
    id: number;
    value: string;
    label: string;
    icon: React.ReactNode;
};

export interface SiteConfig  {
    title: string
    name:string
    description: string
    // url: string
    // ogImage: string
    links: {
        github: string
    }
    keywords:string[],
}