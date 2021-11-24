import {SET_PERSON_DATA, SET_FRIEND_DATA} from '../constants/constants';
import { Actions, PersonProps } from '../interfaces/appInterfaces';

const initialState: PersonProps = {
  personData: {},
  friendData: {}
}

export default function listReducer(state: PersonProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_PERSON_DATA:
      return { ...state, personData: action.value };
    case SET_FRIEND_DATA:
      return { ...state, friendData: action.value };
    default:
      return state;
  }
}