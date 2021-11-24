import React, { FC } from 'react';
import { withRouter } from 'react-router-dom'
import { CoverProps } from '../../interfaces/appInterfaces';
import styles from './styles';
import cover from '../../shared/images/cover.jpg';
import logo from '../../shared/images/logo.png';
import Button from '@material-ui/core/Button';
import locale from '../../shared/locale';

const Cover: FC<CoverProps> = ({ history }) => {
  const classes = styles();

  const onClickEnterCity = () => {
    history.push("/personList");
  }

  return (
    <div className={classes.coverContainer}>
      <img alt='CoverImage' className={classes.coverImage} src={ cover } />
      <div className={classes.buttonContainer}>
        <img className={classes.logoImage} alt='CoverImage' src={ logo } />
        <Button onClick={onClickEnterCity} className={classes.buttonStyle} variant="contained">{locale.EnterToCity}</Button>
      </div>
    </div>
  )
}

export default withRouter(Cover);