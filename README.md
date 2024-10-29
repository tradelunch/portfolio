This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Fix Problems static

[sitemap.xml error](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

```bash
yarn run build
  ▲ Next.js 15.0.1

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  .Error: export const dynamic = "force-static"/export const revalidate not configured on route "/sitemap.xml" with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export
    at new tt (/Users/tio/Documents/__00_projects/portfolio/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:18:4932)
    at 11296 (/Users/tio/Documents/__00_projects/portfolio/.next/server/app/sitemap.xml/route.js:1:1363)
    at t (/Users/tio/Documents/__00_projects/portfolio/.next/server/webpack-runtime.js:1:127)
    at i (/Users/tio/Documents/__00_projects/portfolio/.next/server/app/sitemap.xml/route.js:17:653)
    at /Users/tio/Documents/__00_projects/portfolio/.next/server/app/sitemap.xml/route.js:17:684
    at t.X (/Users/tio/Documents/__00_projects/portfolio/.next/server/webpack-runtime.js:1:2120)
    at /Users/tio/Documents/__00_projects/portfolio/.next/server/app/sitemap.xml/route.js:17:666
    at Object.<anonymous> (/Users/tio/Documents/__00_projects/portfolio/.next/server/app/sitemap.xml/route.js:17:712)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)

> Build error occurred
Error: Failed to collect page data for /sitemap.xml
    at /Users/tio/Documents/__00_projects/portfolio/node_modules/next/dist/build/utils.js:1233:15
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'Error'
}
```
