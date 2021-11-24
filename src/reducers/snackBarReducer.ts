import {SHOW_SNACK_BAR, HIDE_SNACK_BAR} from '../constants/constants';
import {Actions, SnackBarState} from '../interfaces/appInterfaces';

const initialState: SnackBarState = {
  isOpen: false,
  text: ''
}

export default function snackBarReducer(state: SnackBarState = initialState, action: Actions) {
  switch (action.type) {
    case SHOW_SNACK_BAR:
      return { ...state, isOpen: true, text: action.value};
    case HIDE_SNACK_BAR:
      return { ...state, isOpen: false, text: ''};
    default:
      return state;
  }
}