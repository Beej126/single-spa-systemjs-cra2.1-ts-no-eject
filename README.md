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

# running the sample
- just `yarn install` in both main & subspa1
- then `yarn start` subspa1 first and then main