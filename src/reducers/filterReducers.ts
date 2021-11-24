import {SET_FILTER_DATA, SET_FILTER_DATA_FROM_FILTER, REMOVE_CLEAR_FILTERS_BUTTON, SHOW_CLEAR_FILTERS_BUTTON} from '../constants/constants';
import { Actions, FilterState, FilterRanges } from '../interfaces/appInterfaces';
import { PersonEnum } from '../shared/enums';

const initialState: FilterState = {
  filterData: undefined,
  personName: '',
  slidersData: {
    [PersonEnum.AGE]: [],
    [PersonEnum.WEIGHT]: [],
    [PersonEnum.HEIGHT]: []
  },
  multiSelectValue: {
    [PersonEnum.HAIR_COLOR]: [],
    [PersonEnum.PROFESSION]: []
  },
  isFiltered: false
}

const setSlidersData = (slidersData: FilterRanges, data: any) => {
  return {...slidersData, 
    [PersonEnum.AGE]: [
      data.ranges[`${PersonEnum.AGE}MinValue`],
      data.ranges[`${PersonEnum.AGE}MaxValue`]
    ],
    [PersonEnum.WEIGHT]: [
      data.ranges[`${PersonEnum.WEIGHT}MinValue`],
      data.ranges[`${PersonEnum.WEIGHT}MaxValue`]
    ],
    [PersonEnum.HEIGHT]: [
      data.ranges[`${PersonEnum.HEIGHT}MinValue`],
      data.ranges[`${PersonEnum.HEIGHT}MaxValue`]
    ],
  }
}

export default function filterReducer(state: FilterState = initialState, action: Actions) {
  switch (action.type) {
    case SET_FILTER_DATA:
      const data = {
        professions: action.value.professions,
        hair_color: action.value.hair_color,
        ranges: action.value.ranges };

      return { ...state, filterData: data, slidersData: setSlidersData(state.slidersData, data) };
    case SET_FILTER_DATA_FROM_FILTER:
      return { ...state,
               personName: action.value.personName,
               slidersData: action.value.slidersData,
               multiSelectValue: action.value.multiSelectValue,
               isFiltered: true };
    case SHOW_CLEAR_FILTERS_BUTTON:
      return { ...state,
        isFiltered: true };
    case REMOVE_CLEAR_FILTERS_BUTTON:
      return { ...state,
               ...initialState};
    default:
      return state;
  }
}