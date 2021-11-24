import {GET_PERSON_DATA} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonData = (id: number | undefined, globalData: Brastlewark[]): Actions => (
  {type: GET_PERSON_DATA, value: {id, globalData}});
