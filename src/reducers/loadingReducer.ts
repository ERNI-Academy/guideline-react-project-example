import {SHOW_LOADING, HIDE_LOADING} from '../constants/constants';
import { LoadingState, Actions } from '../interfaces/appInterfaces';

const initialState: LoadingState = {
  isLoading: false
}

export default function loadingReducer(state: LoadingState = initialState, action: Actions) {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, isLoading: true};
    case HIDE_LOADING:
      return { ...state, isLoading: false};
    default:
      return state;
  }
}