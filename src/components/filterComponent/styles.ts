import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  nameImput: {
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  list: {
    width: 400,
    overflowX: 'hidden'
  },
  filterButton: {
    color: 'white',
    backgroundColor: 'purple',
    '&:hover': {
      backgroundColor: 'blue !important',
    color: 'white'
    }
  },
  clearFilterButton: {
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'orange !important',
    color: 'white'
    }
  },
  buttonText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default styles;