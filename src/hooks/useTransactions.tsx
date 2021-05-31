import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsProviderProps = {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransationsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

  useEffect( () => {
    api.get('/transactions')
    .then( response => setTransactions(response.data.transactions) );
  }, []);

  async function createTransaction(newTransaction: TransactionInput) {
    const response = await api.post('/transactions', {
      ...newTransaction,
      createdAt: new Date()
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransationsContext.Provider
      value={{transactions, createTransaction}}>
      { children }
    </TransationsContext.Provider>
  )

}

export function useTransactions() {
  const context = useContext(TransationsContext);
  return context;
}