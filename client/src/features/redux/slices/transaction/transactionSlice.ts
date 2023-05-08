import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  TransactionState,
  TransactionType,
} from '../../../../types/transaction/transactionTypes';
import addTransactionAsyncThunk from './addTransactionAsyncThunk';
import loadAllThunk from './loadAllThunk';

const initialState: TransactionState = {
  allTransactions: [],
  currentTransaction: null,
  currentTransactionId: 0,
  status: 'success',
  modalIsOpen: false,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setCurrentId: (state, action: PayloadAction<TransactionState['currentTransactionId']>) => {
      state.currentTransactionId = action.payload;
    },
    changeModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
    setTransactions: (state, action: PayloadAction<TransactionState['allTransactions']>) => {
      state.allTransactions = action.payload;
    },
    addTransaction: (state, action: PayloadAction<TransactionType>) => {
      state.allTransactions.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<TransactionType['id']>) => {
      const foundTransactionIndex = state.allTransactions.findIndex(
        (transaction) => transaction.id === action.payload,
      );
      if (foundTransactionIndex !== -1) {
        state.allTransactions.splice(foundTransactionIndex, 1);
      }
    },
    modifyTransaction: (state, action: PayloadAction<TransactionType>) => {
      //   state.allTransactions = state.allTransactions.map((transaction) =>
      //     transaction.id === action.payload.id ? action.payload : transaction,
      //   );
      const foundIndex = state.allTransactions.findIndex(
        (transaction) => transaction.id === action.payload.id,
      );
      if (foundIndex !== -1) state.allTransactions[foundIndex] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTransactionAsyncThunk.fulfilled, (state, action) => {
      state.allTransactions.push(action.payload);
      state.status = 'success';
    });
    builder.addCase(addTransactionAsyncThunk.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(loadAllThunk.fulfilled, (state, action) => {
      state.allTransactions = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  setTransactions,
  addTransaction,
  deleteTransaction,
  modifyTransaction,
  changeModal,
  setCurrentId,
} = transactionSlice.actions;

export default transactionSlice.reducer;
