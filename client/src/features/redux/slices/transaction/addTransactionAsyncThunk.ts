import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TransactionType } from '../../../../types/transaction/transactionTypes';
import type { AddTransType } from '../../../../types/transaction/formTypes';

const addTransactionAsyncThunk = createAsyncThunk<TransactionType, AddTransType>(
  'transaction/addTransactionAsyncThunk',
  async (formData) => {
    const response = await axios.post<TransactionType>('/api/transactions/', formData);
    return response.data;
  },
);

export default addTransactionAsyncThunk;
