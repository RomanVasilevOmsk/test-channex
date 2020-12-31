import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { provideDispatchToApiService } from '../services/ApiService';

import { rootReducer } from './ducks';

export default function configureStore() {
  const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
    compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  provideDispatchToApiService(store.dispatch);

  return { store };
}
