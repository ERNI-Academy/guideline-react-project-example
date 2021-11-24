import { SET_PERSON_LIST_DATA, SET_FRIENDS_LIST_DATA} from '../constants/constants';
import { Actions, ListProps } from '../interfaces/appInterfaces';

const initialState: ListProps = {
  personListData: [],
  friendsListData: []
}

export default function listReducer(state: ListProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_PERSON_LIST_DATA:
      return { ...state, personListData: action.value.listData };
    case SET_FRIENDS_LIST_DATA:
      return { ...state, friendsListData: action.value };
    default:
      return state;
  }
}