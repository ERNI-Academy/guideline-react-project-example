import { ReactNode } from 'react';
import { RouterState } from 'connected-react-router'
import { ListTypeEnum, PersonEnum } from "../shared/enums";

// Commons
export interface Brastlewark {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: Array<string>;
  friends: Array<string>;
}

export interface BrastlewarkProp {
  id?: number;
  name?: string;
  thumbnail?: string;
  age?: number;
  weight?: number;
  height?: number;
  hair_color?: string;
  professions?: Array<string>;
  friends?: Array<string>;
}

export interface GlobalData {
  Brastlewark: Brastlewark[]
}

export interface ListData {
  id?: number;
  name?: string;
  thumbnail?: string;
}

export interface ListInfoData {
  listType?: ListTypeEnum;
  listData?: ListData[];
}

// State
export interface State {
  loading: LoadingState;
  modal: ModalState;
  home: HomeProps;
  list: ListProps;
  person: PersonProps;
  filter: FilterState;
  snackBar: SnackBarState;
  router: RouterState;
}

// Actions
export interface Actions {type: string, value?: any}

// Loading screen
export interface LoadingState {
  isLoading: boolean
}

// Modal screen
export interface ModalState {
  isOpen: boolean;
  children: ReactNode;
}

// Snack Bar
export interface SnackBarState {
  isOpen: boolean;
  text: string
}

// Home
export interface HomeProps {
  globalData: Brastlewark[];
}

// Cover
export interface CoverProps {
  history: any;
}

// List
export interface ListProps {
  route?: any;
  personListData: Brastlewark[];
  friendsListData: FriendsData[];
  listType?: ListTypeEnum;
  listData?: ListData[];
  onClickRow?: (name?: string, id?: number) => void;
}

export interface ListRows {
  data: Brastlewark;
  panelId: number;
  panelExpanded: string | boolean; 
  handleChange: (personId: number, panelId: string | boolean) => void;
}

export interface FriendsData {
  id: number;
  thumbnail: string;
}

// Person
export interface PersonProps {
  personData: BrastlewarkProp;
  friendData: BrastlewarkProp;
}

export interface PersonInfoProps {
  panelId: number;
}

// Filter
export interface filterMaxMinValues {
  ageMaxValue: number;
  ageMinValue: number;
  weightMaxValue: number;
  weightMinValue: number;
  heightMaxValue: number;
  heightMinValue: number;
  [key: string]: number;
}
export interface FilterData {
  professions: string[];
  hair_color: string[];
  ranges: filterMaxMinValues;
  [key: string]: any;
}

export interface MultiSelectValues {
  [PersonEnum.HAIR_COLOR]: string[],
  [PersonEnum.PROFESSION]: string[],
  [key: string]: string[];
}

export interface FilterState {
  personName: string;
  filterData?: FilterData | undefined;
  slidersData: FilterRanges;
  multiSelectValue: MultiSelectValues;
  isFiltered?: boolean
}

export interface FilterRanges {
  [PersonEnum.AGE]: number[],
  [PersonEnum.WEIGHT]: number[],
  [PersonEnum.HEIGHT]: number[],
  [key: string]: number[];
}

export interface SelectedFilterData {
  [PersonEnum.NAME]: string;
  [PersonEnum.HAIR_COLOR]: string[];
  [PersonEnum.PROFESSION]: string[];
  ranges: FilterRanges;
}