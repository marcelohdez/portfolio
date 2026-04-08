This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Modifying Resume

After making changes to [resume.typ](resume.typ), run:

```bash
typst compile resume.typ public/resume.pdf
```

If you would rather not remember this command, I have a pre-commit hook set up
for exactly this, you can see it in [.githooks/pre-commit](.githooks/pre-commit).
To make git run it automatically before you make commits, run:

```bash
git config core.hooksPath .githooks
```
