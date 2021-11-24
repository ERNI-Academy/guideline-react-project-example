import {SHOW_SNACK_BAR, HIDE_SNACK_BAR} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';

export const showSnackBar = (text: string): Actions => (
  {type: SHOW_SNACK_BAR, value: text});

export const hideSnackBar = (): Actions => (
  {type: HIDE_SNACK_BAR});