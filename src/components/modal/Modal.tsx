import React, { FC, ReactNode } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../interfaces/appInterfaces';
import { hideModal } from '../../actions/modalActions';

export interface SimpleDialogProps {
  children?: ReactNode;
}

const Modal: FC<SimpleDialogProps> = () => {
  const isOpen: boolean = useSelector((state: State) => state.modal.isOpen);
  const children: ReactNode = useSelector((state: State) => state.modal.children);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideModal())
  };

  return     (
  <Dialog
    aria-labelledby="customized-dialog-title"
    open={isOpen}
    onClose={handleClose}
    fullWidth
    maxWidth='md'
  >
    <DialogContent>
      {children}
    </DialogContent>
  </Dialog>)
}

export default Modal;