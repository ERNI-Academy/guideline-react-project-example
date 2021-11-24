import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../interfaces/appInterfaces';
import styles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: FC<{}> = () => {
  const classes = styles();
  const isLoading: boolean = useSelector((state: State) => state.loading.isLoading);

  return isLoading ?
    <div className={classes.loadingContainer}>
      <CircularProgress />
    </div> : null
}

export default Loading;