# Next.js / Ionic / Capacitor / TypeScript app starter

Starter for making native apps with Next.js

## Development

### Before you start

You will need [VS Code](https://code.visualstudio.com/) with the following extensions installed

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Ionic](https://marketplace.visualstudio.com/items?itemName=ionic.ionic)
- [Microsoft Edge Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Then, install all dependencies:

```
npm i
```

### Development workflow

1. Run the development server:

```
npm run dev
```

2. Click 'Launch Project' in the **Microsoft Edge Tools** sidebar
3. Then 'Attach to Edge' in the **Run and Debug** sidebar

This will enable you to use Edge integrated into VS code with the console.

### Committing changes

When you try to commit, some pre-commit scripts will run to check the formatting, linting, types and build.

This will take some time to run, but it's worth it to stop us committing broken code.

If any of these checks fail, the commit will fail and you will need to fix what you broke then commit again.

## Next/Ionic gotchas

1. Cannot use Server Side Rendering, getServerSideProps() or API routes (pages/api). See [\_app.tsx Line 36](./pages/_app.tsx)
2. Transpile Modules have been added to enable ionic to be compiled. See [next.config.js](./next.config.js)
3. SWC Minify does not currently work on Ionic Appflow build. To enable the build, [.babelrc] has been added [as described in the Next docs](https://nextjs.org/docs/messages/failed-loading-swc)
4. For Ionic 6 you need to call setupIonicReact() in [\_app.tsx](./pages/_app.tsx)
5. In [ionic.config.json](./ionic.config.json) the type needs to be set to custom (not react) which requires a "build:ionic" script in [package.json](./package.json)

## Release process

### Live updates

Live updates are suitable for changes that do not require additional capacitor plugins or app permissions.

1. In Appflow, run a Web build from the correct commit.

2. Assign it as a live update to the desired live update channel.

### Native app-store updates

You should only deploy to the app store if there are significant changes to the app, such as new capacitor plugins or changes require new permissions.

1. Run `npm run sync` to update the native builds.

2. In the **Ionic** sidebar, open configuration and update the semantic **Version Number** and increment the **Build Number**

3. Run `ionic deploy configure --channel-name ReleaseX.X.X`, commit and push.

4. In Appflow, create a new Live Update Channel called ReleaseX.X.X.

5. In Appflow, run native builds, deploying to the app stores.

6. Go to the app stores to publish the release.
