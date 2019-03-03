# single-spa-systemjs-cra2.1-ts-no-eject
[single-spa](https://single-spa.js.org/) sample using SystemJS for the remote subspa bundle.js imports

# Highlights
- single-spa container starting point: main/src/index.tsx
- subspa1 is the remotely referenced child spa
- both projects created via `create-react-app --typescript` (CRA v2.1.3)
- uses [rescripts](https://github.com/harrysolovay/rescripts) to customize webpack config **WITHOUT EJECT**, see `subspa1/.rescriptsrc`
  - `output.libraryTarget = 'amd'` necessary on the subspa builds for main spa SystemJS import compatibility, CRA defaults to esnext
  - webpackDevServer CORS - necessary to host the subspas on their individual ports

# Call out
- instead of just `() => SystemJS(url)`... i realized i needed to traverse to the `.default` property to expose the actual module, otherwise the dreaded `LOADING_SOURCE_CODE: does not export an unmount function or array of functions` error... see `main/src/helpers/microSpa.ts::remoteImport()`

# Considerations
- .rescriptsrc is also doing the webpack config mods to generate a single bundle.js file vs any code splitting... that probably means the client will be downloading more than necessary across all sub-spas... 
- this was necessary so far because it gives us a known filename to reference vs the randomized chunk names... 
- and by default webpack doesn't seem to respect the amd module type for building the "vendor" chunks
- for these initial projects the bundles are naturally super small anyway but this is an area to keep in mind for further optimzation if those start getting sizable during the course of real construction

# running the sample
- just `yarn install` in both main & subspa1
- then `yarn start` subspa1 first and then main
