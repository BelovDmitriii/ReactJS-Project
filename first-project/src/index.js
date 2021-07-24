import state from './redux/state';
//import * as serviceWorker from "./serviceWorker";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state);

//serviceWorker.unregister();