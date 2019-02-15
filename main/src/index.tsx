//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import * as singleSpa from 'single-spa';
import * as microSpa from './helpers/microSpa';

//forgo the original CRA root-app...
//ReactDOM.render(<App />, document.getElementById('root'));

//load it in single-spa style...
singleSpa.registerApplication('root', () => import('./AppMicro'), () => true);

//our first true micro-spa!
singleSpa.registerApplication('proj-app', microSpa.remoteImport('//localhost:3001/static/js/bundle.js'),  () => true);

singleSpa.start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
