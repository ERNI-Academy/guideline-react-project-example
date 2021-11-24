import {
  SET_FILTER_DATA,
  SET_FILTER_DATA_FROM_FILTER,
  REMOVE_CLEAR_FILTERS_BUTTON, SHOW_CLEAR_FILTERS_BUTTON
} from '../constants/constants';
import { Actions, FilterData, FilterState } from '../interfaces/appInterfaces';
import {showSnackBar} from "./snackBarActions";

export const setFilterData = (data: FilterData): Actions => (
  {type: SET_FILTER_DATA, value: data});

export const setFilterDataFromFilter = (data: FilterState): Actions => (
  {type: SET_FILTER_DATA_FROM_FILTER, value: data});

export const showClearFilters = (): Actions => (
  {type: SHOW_CLEAR_FILTERS_BUTTON});

export const clearFilters = (): Actions => (
  {type: REMOVE_CLEAR_FILTERS_BUTTON});

export const removeClearFilters = (): any => (dispatch: any) => {
  dispatch(clearFilters())
  dispatch(showSnackBar('Filters cleaned successful'))
};