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

This will take some time to run, but it's worth it to stop us committing broken code.

If any of these checks fail, the commit will fail and you will need to fix what you broke then commit again.

## Next/Ionic gotchas

1. Cannot use Server Side Rendering or getServerSideProps(). See [\_app.tsx Line 36](./pages/_app.tsx)
2. Transpile Modules have been added to enable ionic to be compiled. See [next.config.js](./next.config.js)
3. SWC Minify does not currently work on Ionic Appflow build. To enable the build, [.babelrc] has been added [as described in the Next docs](https://nextjs.org/docs/messages/failed-loading-swc)
4. For Ionic 6 you need to call setupIonicReact() in [\_app.tsx](./pages/_app.tsx)
