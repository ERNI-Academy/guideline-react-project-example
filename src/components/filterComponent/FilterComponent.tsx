import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import {
  List, Divider, ListItem, Checkbox, ListItemText, Select, TextField, Typography, Slider, Input, InputLabel,
  MenuItem, FormControl
} from '@material-ui/core';
import locale from '../../shared/locale';
import { useSelector, useDispatch } from 'react-redux';
import {
  State, FilterData, SelectedFilterData,
  FilterRanges, MultiSelectValues, FilterState} from '../../interfaces/appInterfaces';
import {setFilterDataFromFilter, removeClearFilters} from '../../actions/filterActions';
import { PersonEnum } from '../../shared/enums';
import {useFetchGetAllListMutation, useFetchGetFilteredListMutation} from "../../services/app.query";

interface MultiselectData {
  [key: string]: string[];
}

const emptySliderData: FilterRanges = {
  [PersonEnum.AGE]: [],
  [PersonEnum.WEIGHT]: [],
  [PersonEnum.HEIGHT]: []
}

const emptyMultiSelectValue: MultiselectData = {
  [PersonEnum.HAIR_COLOR]: [],
  [PersonEnum.PROFESSION]: []
}

const FilterComponent: FC<{}> = () => {
  const dispatch = useDispatch();
  const filterData: FilterData | undefined = useSelector((state: State) => state.filter.filterData);
  const sliderData: FilterRanges = useSelector((state: State) => state.filter.slidersData);
  const multiSelectValue: MultiSelectValues = useSelector((state: State) => state.filter.multiSelectValue);
  const personName: string = useSelector((state: State) => state.filter.personName);
  const isFiltered: boolean | undefined = useSelector((state: State) => state.filter.isFiltered);
  const [stateSlidersData, setStateSlidersData] = useState<FilterRanges>(emptySliderData);
  const [stateMultiSelectValue, setStateMultiSelectValue] = useState<MultiselectData>(emptyMultiSelectValue);
  const [statePersonName, setStatePersonName] = useState<string>('');
  const classes = styles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  useEffect(() => {
    setStateSlidersData(sliderData);
    setStateMultiSelectValue(multiSelectValue);
    setStatePersonName(personName);
    }, [sliderData, multiSelectValue, personName]
  );
  const {mutateAsync: onFilter} = useFetchGetFilteredListMutation();
  const {mutateAsync: getAllData} = useFetchGetAllListMutation();


  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChanges = (event: any, newValue: number | number[], sliderType: PersonEnum) => {
    setStateSlidersData({...stateSlidersData, [sliderType]: newValue as number[]});
  };

  const renderSlider = (sliderType: PersonEnum) => (
    <div className={classes.root}>
      <Typography id={`range-slider-title-${sliderType}`} gutterBottom>
        {locale[sliderType]}
      </Typography>
      <Slider
        name={sliderType}
        value={stateSlidersData[sliderType]}
        onChange={(event, value) => handleChanges(event, value, sliderType)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={filterData?.ranges[`${sliderType}MaxValue`]}
        min={filterData?.ranges[`${sliderType}MinValue`]}
      />
    </div>
  );

  const handleSelectMultipleChange = (event: React.ChangeEvent<{ value: unknown }>, multiSelectOption: PersonEnum) => {
    setStateMultiSelectValue({...stateMultiSelectValue, [multiSelectOption]: event.target.value as string[]});
  };

  const renderMultiselect = (dataOption: PersonEnum) => (
    <FormControl className={classes.formControl}>
      <InputLabel id={`mutiple-input-label-${dataOption}`}>{locale[dataOption]}</InputLabel>
      <Select
        labelId={`mutiple-checkbox-label-${dataOption}`}
        id={`mutiple-checkbox-${dataOption}`}
        multiple
        value={stateMultiSelectValue[dataOption]}
        onChange={(event) => handleSelectMultipleChange(event, dataOption)}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(', ')}
        MenuProps={MenuProps}
      >
        {filterData && filterData[dataOption].map((name: any) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={stateMultiSelectValue[dataOption].indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  const onChangeName = (event: any) => {
    setStatePersonName(event.target.value)
  }

  const onClickFilter = () => {
    dispatch(setFilterDataFromFilter(
      {
        personName: statePersonName,
        slidersData: stateSlidersData,
        multiSelectValue: stateMultiSelectValue
      } as FilterState
    ));
    onFilter({
      [PersonEnum.NAME]: statePersonName,
      [PersonEnum.HAIR_COLOR]: stateMultiSelectValue[PersonEnum.HAIR_COLOR],
      [PersonEnum.PROFESSION]: stateMultiSelectValue[PersonEnum.PROFESSION],
      ranges: stateSlidersData
    } as SelectedFilterData);
  }

  const onClickClearFilter = () => {
    getAllData();
    dispatch(removeClearFilters());
  }

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <ListItem key="filterTitle">
          <ListItemText primary={locale.SelectToFilter} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={PersonEnum.NAME}>
          <TextField
            className={classes.nameImput}
            id="standard-basic"
            label={locale.Name}
            onChange={onChangeName}
            value={statePersonName} />
        </ListItem>
        <ListItem key={PersonEnum.AGE}>
          {renderSlider(PersonEnum.AGE)}
        </ListItem>
        <ListItem key={PersonEnum.WEIGHT}>
          {renderSlider(PersonEnum.WEIGHT)}
        </ListItem>
        <ListItem key={PersonEnum.HEIGHT}>
          {renderSlider(PersonEnum.HEIGHT)}
        </ListItem>
        <ListItem key={PersonEnum.HAIR_COLOR}>
          {renderMultiselect(PersonEnum.HAIR_COLOR)}
        </ListItem>
        <ListItem key={PersonEnum.PROFESSION}>
          {renderMultiselect(PersonEnum.PROFESSION)}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className={classes.filterButton} button key="filterButton" onClick={onClickFilter}>
          <ListItemText className={classes.buttonText} primary={locale.Filter} />
        </ListItem>
      </List>
      <Divider />
      {isFiltered && <List>
        <ListItem className={classes.clearFilterButton} button key="filterButton" onClick={onClickClearFilter}>
          <ListItemText className={classes.buttonText} primary={locale.ClearFilters} />
        </ListItem>
      </List>}
    </div>
  );
}

export default FilterComponent;