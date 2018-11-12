import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as module from './module';
//console.log(module.topla(5, 2));
console.log(module.default(5, 2));
console.log(module.cikar(8, 5));
console.log(module.carp(5, 4));
console.log(module.bol(6, 3));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
