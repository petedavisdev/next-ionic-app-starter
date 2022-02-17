This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

### Before you start

You should use VS Code with the following extensions installed

- ESLint
- Microsoft Edge Tools for VS Code
- Prettier

Then, install all dependencies:

```
npm i
```

### Development workflow

Run the development server:

```
npm run dev
```

You can then click 'Launch Project' in Microsoft Edge Tools, followed by 'Attach to Edge' in the Run and Debug.

This will enable you to use Edge integrated into VS code.

### Committing changes

When you try to commit, some pre-commit scripts will run to check the formatting, linting, types and build.

If any of these checks fail, the commit will fail and you will need to fix what you broke then commit again.

## Next/Ionic problems

1. Ionic framework components cannot be server-side rendered. See [\_app.tsx Line 36](./pages/_app.tsx)
2. Transpile Modules have been added to enable ionic to be compiled. See [next.config.js](./next.config.js)
3. SWC Minify does not work on Ionic Appflow build. It has been disabled in [next.config.js](./next.config.js) and [.babelrc] added [as described in the Next docs](https://nextjs.org/docs/messages/failed-loading-swc)
4. Even with these workarounds, ionic components do not hydrate
