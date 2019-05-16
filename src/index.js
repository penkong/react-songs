import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //its comp
import { createStore } from 'redux'; // from reducers

import App from './components/App';
import reducers from './reducers';



ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('#root'));