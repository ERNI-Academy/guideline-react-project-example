import {SET_GLOBAL_DATA} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const setGlobalData = (globalData: Brastlewark[]): Actions => (
  {type: SET_GLOBAL_DATA, value: globalData});