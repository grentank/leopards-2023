import React, { useCallback } from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../../features/redux/hooks';
import TransactionItem from './TransactionItem';
import type { TransactionType } from '../../types/transaction/transactionTypes';

export default function TransactionList(): JSX.Element {
  const allTransactions = useAppSelector((store) => store.transaction.allTransactions);
  const uselessCallback = useCallback((): void => {}, []);
  return (
    <Grid container spacing={4}>
      {allTransactions.map((transaction) => (
        <Grid key={transaction.id} item xs={12}>
          <TransactionItem transaction={transaction} uselessCallback={uselessCallback} />
        </Grid>
      ))}
    </Grid>
  );
}
