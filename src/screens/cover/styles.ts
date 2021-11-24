import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  coverContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  coverImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  buttonStyle: {
    color: 'white !important',
    height: '50px',
    width: '200px',
    backgroundColor: 'purple !important',
    '&:hover': {
      backgroundColor: 'blue !important',
    }
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logoImage: {
    zIndex: 1,
    width: '60vw'
  }
});

export default styles;