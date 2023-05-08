import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import type { AddTransType } from '../../types/transaction/formTypes';
import addTransactionAsyncThunk from '../../features/redux/slices/transaction/addTransactionAsyncThunk';

export default function AddTransactionForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector((store) => store.transaction.status);

  const [formData, setFormData] = useState<AddTransType>({
    receiverId: '',
    value: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    void dispatch(addTransactionAsyncThunk(formData));
    setFormData({
      receiverId: '',
      value: '',
      message: '',
    });
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="post-title"
            label="Receiver id"
            name="receiverId"
            type="number"
            value={formData.receiverId}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="value-trans"
            label="Value"
            name="value"
            value={formData.value}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Transaction message"
            type="text"
            id="post-body"
            value={formData.message}
            onChange={handleChange}
          />
          <LoadingButton
            loading={status === 'pending'}
            disabled={status === 'pending'}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send manee!
          </LoadingButton>
        </Box>
      </Grid>
    </Grid>
  );
}
