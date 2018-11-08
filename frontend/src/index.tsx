import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { IStoreState } from './types/index';
import { createAppMiddleware } from './middleware/createAppMiddleware';
import { getDocuments } from './services/getDocuments';
import { Provider } from 'react-redux';
import App from './App';

const w = (window as any);

const devTools = (w.devToolsExtension ? w.devToolsExtension() : (f:any) => f);

const store = createStore<IStoreState, any, any, any>(rootReducer, undefined,
  compose(
    applyMiddleware(
      createAppMiddleware(getDocuments)
    ),
    devTools
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
