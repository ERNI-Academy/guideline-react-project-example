import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  loadingContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(255,255,255, 0.5)'
  },
});

export default styles;