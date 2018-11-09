import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { IStoreState } from './types/index';
import { createAppMiddleware } from './middleware/createAppMiddleware';
import * as documentsService from './services/documents';
import { Provider } from 'react-redux';
import App from './AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const w = (window as any);

const devTools = (w.devToolsExtension ? w.devToolsExtension() : (f:any) => f);

const store = createStore<IStoreState, any, any, any>(rootReducer, undefined,
  compose(
    applyMiddleware(
      createAppMiddleware(documentsService.getDocs,
        documentsService.filterDocs,
        documentsService.deleteDoc,
        documentsService.uploadDoc
      )
    ),
    devTools
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
