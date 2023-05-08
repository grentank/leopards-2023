import type { BackendUserType } from '../user/userTypes';

export type TransactionType = {
  id: number;
  senderId: number;
  receiverId: number;
  value: number;
  message: string;
  Sender: BackendUserType;
  Receiver: BackendUserType;
  createdAt: Date;
};

export type AddStatus = 'pending' | 'success' | 'error';

export type TransactionState = {
  allTransactions: TransactionType[];
  currentTransaction: TransactionType | null;
  currentTransactionId: TransactionType['id'];
  status: AddStatus;
  modalIsOpen: boolean;
};
