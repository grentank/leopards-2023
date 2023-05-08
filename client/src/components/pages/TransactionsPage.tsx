import React from 'react';
import AddTransactionForm from '../ui/AddTransactionForm';
import TransactionList from '../ui/TransactionList';

export default function TransactionsPage(): JSX.Element {
  return (
    <>
      <AddTransactionForm />
      <TransactionList />
    </>
  );
}
