import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { AddTransactionModal } from './components/AddTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [ isAddTransactionModalOpen, setIsAddTransactionModalOpen ] = useState(false);

  function handleOpenAddTransactionModal() {
    setIsAddTransactionModalOpen(true);
  }

  function handleCloseAddTransactionModal() {
    setIsAddTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header openModal={handleOpenAddTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <AddTransactionModal
        isOpen={isAddTransactionModalOpen}
        onRequestClose={handleCloseAddTransactionModal}
      />
    </TransactionsProvider>
  );
}
