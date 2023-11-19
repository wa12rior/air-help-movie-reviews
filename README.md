This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

App queries NY Times article API for movie reviews. Movies API is deprecated and no longer supported. App takes advantage of localstorage in combination with zustand to save 5 last history queries.

## System Requirements

- Node.js 18.17 or later.
- macOS, Windows (including WSL), and Linux are supported.

## Getting Started

Before you start make sure that you copy `.env.example` and rename it to `.env.local` in order for next js to read environment variables.
Configure NY Times API KEY
```
NYTIMES_API_KEY
```

Source [https://developer.nytimes.com/get-started](Link)

Install dependencies and run the development server:

```bash
npm install && npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
