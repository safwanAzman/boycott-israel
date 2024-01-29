import { MetadataRoute } from 'next';
import {siteMapBoycottList} from '@/data/sitemapRoute';

export default function Sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        {
            url: 'https://www.boikotisrael.com/en',
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
    ];

    const dynamicRoutes = siteMapBoycottList.map((item: any) => ({
        url: `https://www.boikotisrael.com/en/why/${item.name}/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));
    

    const allRoutes = [
        ...staticRoutes,
        ...dynamicRoutes,
    ];

    return allRoutes;
}