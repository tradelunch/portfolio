import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // {
    //   url: 'https://acme.com',
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 1,
    // },
    // {
    //   url: 'https://acme.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://acme.com/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}

  // use next fetch to deduplicate requests
// private static HttpAgent = {
// get: async <T>(path: string, params: { params: object }): Promise<{ data: T }> => {
//     const queryParams = qs.stringify(params.params, { arrayFormat: 'indices', encodeValuesOnly: true });

//     const req = await fetch(`${CMSClient.url}/api/${path}?${queryParams}`, {
//     headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}`,
//     },
//     cache: 'force-cache',
//     });

//     const response = (await req.json()) as T;

//     return { data: response };
// },
// };