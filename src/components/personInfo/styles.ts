import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '95%',
      boxShadow: 'none',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    content: {
      flex: '1 0 auto',
      padding: 0
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    friendsThubnails: {
      display: 'flex',
      alignItems: 'center'
    }
  }),
);

export default styles;