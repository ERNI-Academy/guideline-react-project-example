import {useDispatch} from "react-redux";
import {useMutation, useQuery} from "react-query";
import {Queries} from './queries';
import AppService from "./app.service";
import {Urls} from "../constants/urls";
import locale from "../shared/locale";
import {hideLoading, showLoading} from "../actions/loadingActions";
import {getListDataFromFilter, getPersonData, getPersonsListByName} from "../shared/utils";
import {setGlobalData} from "../actions/homeActions";
import {removeClearFilters, showClearFilters} from "../actions/filterActions";
import {SelectedFilterData} from "../interfaces/appInterfaces";

const appService = new AppService();

export function useFetchGetGlobalDataQuery({onSuccess}: {onSuccess: (response: any) => void}) {
  const dispatch = useDispatch();
  return useQuery(
    [Queries.GetGlobalData],
    () => {
      dispatch(showLoading());
      return appService.getGlobalData({url: Urls.GlobalData})
    },
    {
      onSuccess,
      onError: ({errorMessage = locale.ErrorDefault}) => {
        dispatch(hideLoading());
        alert(errorMessage)
      },
    }
  );
}

export const useFetchGetAllListMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    () => {
      dispatch(showLoading());
      return appService.getGlobalData({url: Urls.GlobalData});
    },
    {
      onSuccess: (response = []) => {
        dispatch(hideLoading());
        dispatch(setGlobalData(response));
      },
      onError: ({errorMessage = locale.ErrorDefault}) => {
        dispatch(hideLoading());
        alert(errorMessage)
      },
    }
  );
}

export function useFetchGetPersonDataMutation({onSuccess}: {onSuccess: (response: any) => void}) {
  const dispatch = useDispatch();
  let personId: number;
  return useMutation(
    (id: any) => {
      dispatch(showLoading());
      personId = id;
      return appService.getGlobalData({url: Urls.GlobalData});
    },
    {
      onSuccess: (response = []) => {
        dispatch(hideLoading());
        onSuccess(getPersonData(personId, response))
      },
      onError: ({errorMessage = locale.ErrorDefault}) => {
        dispatch(hideLoading());
        alert(errorMessage)
      },
    }
  );
}

export const useFetchGetPersonByNameMutation = () => {
  const dispatch = useDispatch();
  let personName: any;
  return useMutation(
    (name: string) => {
      dispatch(showLoading());
      personName = name;
      return appService.getGlobalData({url: Urls.GlobalData});
    },
    {
      onSuccess: (response = []) => {
        dispatch(hideLoading());
        dispatch(setGlobalData(getPersonsListByName({name: personName, globalData: response})));
        if(personName) {
          dispatch(showClearFilters())
        } else {
          dispatch(removeClearFilters())
        }
      },
      onError: ({errorMessage = locale.ErrorDefault}) => {
        dispatch(hideLoading());
        alert(errorMessage);
      },
    }
  );
}

export const useFetchGetFilteredListMutation = () => {
  const dispatch = useDispatch();
  let filters: SelectedFilterData;
  return useMutation(
    (data: SelectedFilterData) => {
      dispatch(showLoading());
      filters = data;
      return appService.getGlobalData({url: Urls.GlobalData});
    },
    {
      onSuccess: (response = []) => {
        dispatch(hideLoading());
        const filteredList = getListDataFromFilter(filters, response);
        dispatch(setGlobalData(filteredList));
      },
      onError: ({errorMessage = locale.ErrorDefault}) => {
        dispatch(hideLoading());
        alert(errorMessage)
      },
    }
  );
}
