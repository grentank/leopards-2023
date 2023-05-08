import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import {
  changeModal,
  deleteTransaction,
} from '../../features/redux/slices/transaction/transactionSlice';

export default function DeleteDialog(): JSX.Element {
  //   const [open, setOpen] = React.useState(false);

  const open = useAppSelector((store) => store.transaction.modalIsOpen);
  const currentId = useAppSelector((store) => store.transaction.currentTransactionId);

  //   const handleClickOpen = (): void => {
  //     setOpen(true);
  //   };

  //   const handleClose = (): void => {
  //     setOpen(false);
  //   };
  const dispatch = useAppDispatch();

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(changeModal())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete this transaction?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(changeModal());
            }}
          >
            Disagree
          </Button>
          <Button
            onClick={() => {
              dispatch(changeModal());
              dispatch(deleteTransaction(currentId));
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
