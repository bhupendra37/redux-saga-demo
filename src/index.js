import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootSaga} from "./saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {reducer} from "./reducer";

  




const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>, document.getElementById('root')
 );

 reportWebVitals();
