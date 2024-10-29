import type { MetadataRoute } from 'next';

// export default function sitemap(): MetadataRoute.Sitemap {
//     return [
//         {
//             url: 'https://intothedeep.github.com',
//             lastModified: new Date().toISOString(), // Ensure ISO string format
//             changeFrequency: 'yearly',
//             priority: 1,
//           },
//         // {
//         //   url: 'https://acme.com/about',
//         //   lastModified: new Date(),
//         //   changeFrequency: 'monthly',
//         //   priority: 0.8,
//         // },
//         // {
//         //   url: 'https://acme.com/blog',
//         //   lastModified: new Date(),
//         //   changeFrequency: 'weekly',
//         //   priority: 0.5,
//         // },
//     ];
// }

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

// sitemap.xml.js

// export const dynamic = 'force-static'; // Ensures this page is treated as static
// export const revalidate = 60; // Revalidate every 60 seconds

// export default async function handler(req, res) {
//     const sitemap = generateSitemap(); // Replace with your sitemap generation logic
//     res.setHeader('Content-Type', 'application/xml');
//     res.write(sitemap);
//     res.end();
// }

// function generateSitemap() {
//     // Implement sitemap generation logic here
//     return `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     <url>
//       <loc>https://example.com/</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>daily</changefreq>
//       <priority>1.0</priority>
//     </url>
//   </urlset>`;
// }

// app/sitemap.xml/page.tsx
// export const dynamic = "force-static";
// export const revalidate = 3600; // Optional: Set revalidation

// export default function Sitemap() {
//     return new Response(
//         `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//             <url>
//                 <loc>https://intothedeep.github.id/</loc>
//             </url>
//         </urlset>`,
//         {
//             headers: {
//                 'Content-Type': 'application/xml',
//             },
//         },
//     );
// }