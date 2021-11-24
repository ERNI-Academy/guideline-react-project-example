import { createStore, applyMiddleware  } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory()

export default function configureStore() {
  const middlewares = [routerMiddleware(history), thunk];
  return createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(...middlewares),
    )
  );
}