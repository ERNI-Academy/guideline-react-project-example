import { makeStyles, createStyles  } from '@material-ui/core/styles';

const styles = makeStyles(() => createStyles({
  psBackground: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundRepeat: 'repeat-y'
  },
  root: {
    width: '100%',
    paddingTop: 60
  },
  container: {
    width: '80%',
    padding: 20
  },
}));

export default styles;