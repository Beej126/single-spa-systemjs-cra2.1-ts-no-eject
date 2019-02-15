# single-spa-systemjs-cra2.1-ts-no-eject
single-spa sample with latest CRA2.1, Typescript and webpack AMD module for SystemJS WITHOUT EJECTING

# Highlights
- a simple example with the confusing bits working
- main is the container
- subspa1 is the remotely referenced child spa
- both projects created via latest `CRA 2.1.3 --typescript` template
- accomplishes the webpack.libraryTarget = 'amd' via [rescripts](https://github.com/harrysolovay/rescripts) to avoid ejecting create-react-app (amd is necessary for SystemJS, CRA defaults to esnext).
- webpackDevServer CORS is also handled via rescripts
- single-spa container starting point: main/src/index.tsx
- and check out subspa1/.rescriptsrc for the webpack config overrides

# Call out
- instead of just `() => SystemJS(url)`... i realized i needed to traverse to the `.default` property to expose the actual module, otherwise the dreaded `LOADING_SOURCE_CODE: does not export an unmount function or array of functions` error... see `main/src/helpers/microSpa.ts::remoteImport()`

# Considerations
- .rescriptsrc is also doing the webpack config mods to generate a single bundle.js file vs any code splitting... i.e. we're setting ourselves up for the client to be downloading more than necessary across all sub-spas... 
- this was necessary so far because it gives us a known filename to reference vs the randomized chunk names... 
- and by default webpack doesn't seem to respect the amd module type for building the "vendor" chunks
- for these initial projects the bundles are naturally super small anyway but this is an area to keep in mind for further optimzation if those start getting sizable during the course of real construction

# running the sample
- just `yarn install` in both main & subspa1
- then `yarn start` subspa1 first and then main
