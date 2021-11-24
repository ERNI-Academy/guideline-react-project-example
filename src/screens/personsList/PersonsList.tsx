import React, { FC, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ListProps, Brastlewark, FilterData} from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';
import {AppBarComponent} from '../../components';
import {State} from '../../interfaces/appInterfaces';
import styles from './styles';
import { setGlobalData } from '../../actions/homeActions';
import {ExpansionPanelComponent} from '../../components';
import backgroundFog from '../../shared/images/backgroundFog.jpg';
import { getPersonData } from '../../actions/personActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Typography from '@material-ui/core/Typography';
import {useFetchGetGlobalDataQuery} from "../../services/app.query";
import {hideLoading} from "../../actions/loadingActions";
import {getFilterData} from "../../shared/utils";
import {setFilterData} from "../../actions/filterActions";

const PersonsList: FC<ListProps> = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const globalData = useSelector((state: State) => state.home.globalData);
  const isFiltered: boolean | undefined = useSelector((state: State) => state.filter.isFiltered);
  const [expandedPanel, setExpandedPanel] = useState<string | boolean>(false);
  const [listData, setListData] = useState<Brastlewark[]>([]);
  let listIndex: number = 20;

  useEffect(() => {
    setListData(globalData.slice(0, listIndex))
    const filterInfo: FilterData = getFilterData(globalData);
    !isFiltered && dispatch(setFilterData(filterInfo));
  }, [globalData])

  useFetchGetGlobalDataQuery({onSuccess: (response) => {
      dispatch(hideLoading());
      dispatch(setGlobalData(response));
      setListData(response.slice(0, listIndex))
    }})

  const handleChange = (personId: number, panelId: string | boolean) => {
    dispatch(getPersonData(personId, globalData));
    setExpandedPanel(panelId);
  };

  const fetchMoreData = () => {
    let newListData: Brastlewark[] = listData;
    newListData = newListData.concat(globalData.slice(listIndex, listIndex + 20));
    listIndex = listIndex + 20;
    setListData(newListData);
  };

  return (
    <div>
      <img alt='personListBGImage' className={classes.psBackground} src={backgroundFog} />
      <AppBarComponent>
        <Container className={classes.container}>
          <div className={classes.root}>
          {listData.length ? <InfiniteScroll
            dataLength={listData.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
            {listData.map((person: Brastlewark, index: number) => (
              <ExpansionPanelComponent
                data={person}
                key={`person${index}`}
                panelId={index}
                panelExpanded={expandedPanel}
                handleChange={handleChange}
              />
            ))}
            </InfiniteScroll> :
            <Typography variant="subtitle1" color='primary'>
              There aren't citizens on the city
            </Typography>}
          </div>
        </Container>
      </ AppBarComponent>
    </div>
	)
}

export default PersonsList;