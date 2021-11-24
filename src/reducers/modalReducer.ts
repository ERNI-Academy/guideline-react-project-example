import {SHOW_MODAL, HIDE_MODAL} from '../constants/constants';
import { Actions, ModalState } from '../interfaces/appInterfaces';

const initialState: ModalState = {
  isOpen: false,
  children: null
}

export default function modalReducer(state: ModalState = initialState, action: Actions) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isOpen: true, children: action.value};
    case HIDE_MODAL:
      return { ...state, isOpen: false};
    default:
      return state;
  }
}