import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TransactionType } from '../../../../types/transaction/transactionTypes';

const loadAllThunk = createAsyncThunk<TransactionType[]>('transactions/loadAll', async () => {
  const response = await axios<TransactionType[]>('/api/transactions');
  return response.data;
});

export default loadAllThunk;
