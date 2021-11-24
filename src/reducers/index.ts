import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import homeReduder from './homeReducer';
import loadingReducer from './loadingReducer';
import listReducer from './listReducer';
import personReducer from './personReducer';
import modalReducer from './modalReducer';
import filterReducer from './filterReducers';
import snackBarReducer from "./snackBarReducer";

const rootReducer = (history: History) => combineReducers({
  home: homeReduder,
  loading: loadingReducer,
  list: listReducer,
  person: personReducer,
  modal: modalReducer,
  filter: filterReducer,
  snackBar: snackBarReducer,
  router: connectRouter(history)
})

export default rootReducer;