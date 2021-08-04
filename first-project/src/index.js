import store from './redux/state';
//import * as serviceWorker from "./serviceWorker";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState = {state}
           dispatch = {store.dispatch.bind(store)}
           store = {store} />
    </BrowserRouter>, document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

//serviceWorker.unregister();