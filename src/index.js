import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//If you want to pass down initial state from a server you could do it here.
const store = configureStore();
//You want to load the courses on load so you can do that here.
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
//Effectively the Provider component is wrapping our whole app so that the container components have access to the store
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
