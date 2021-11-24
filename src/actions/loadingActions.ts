import {SHOW_LOADING, HIDE_LOADING} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';

export const showLoading = (): Actions => (
  {type: SHOW_LOADING});

export const hideLoading = (): Actions => (
  {type: HIDE_LOADING});