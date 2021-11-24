import {SET_GLOBAL_DATA} from '../constants/constants';
import { Actions, HomeProps } from '../interfaces/appInterfaces';

const initialState: HomeProps = {
  globalData: []
}

export default function homeReducer(state: HomeProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_GLOBAL_DATA:
      return { ...state, globalData: action.value };
    default:
      return state;
  }
}