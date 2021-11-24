import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../interfaces/appInterfaces";
import {hideSnackBar} from "../../actions/snackBarActions";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarComponent() {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector((state: State) => state.snackBar.isOpen);
  const text: string = useSelector((state: State) => state.snackBar.text);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideSnackBar());
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {text}
      </Alert>
    </Snackbar>
  );
}
