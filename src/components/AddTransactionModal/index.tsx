import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, RadioButton, TransactionTypes } from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from "../../hooks/useTransactions";

interface AddTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AddTransactionModal({
  isOpen,
  onRequestClose
}: AddTransactionModalProps) {

  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const [transactionType, setTransactionType] = useState('deposit');

  async function handleAddTransaction(event: FormEvent) {
    event.preventDefault();

    // create new transaction
    await createTransaction({
      title,
      amount,
      category,
      type: transactionType
    })

    // reset modal to defaul values
    setTitle('');
    setAmount(0);
    setCategory('');
    setTransactionType('');
    
    // request close
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}>
      <button className="react-modal-close" onClick={onRequestClose}>
        <img src={closeImg} alt="close modal" />
      </button>
      <Container onSubmit={handleAddTransaction}>
        <h2>New Transaction</h2>
        <input
          value={title}
          onChange={ event => setTitle(event.target.value)}
          type="text"
          placeholder="title"
        />
        <label htmlFor="" className={'currencyInput'}>
          <input
            type="number"
            min="0.00"
            step="0.10"
            placeholder="value"
            value={amount}
            onChange={ event => setAmount(Number(event.target.value))}
          />
        </label>

        <TransactionTypes>
          <RadioButton
            type="button"
            value="deposit"
            className={ transactionType === 'deposit' ? 'active' : '' }
            onClick={ () => setTransactionType('deposit')}>
            <img src={incomeImg} alt="income" />
            <span>income</span>
          </RadioButton>
          <RadioButton
            type="button"
            value="withdraw"
            className={ transactionType === 'withdraw' ? 'active' : '' }
            onClick={ () => setTransactionType('withdraw')}>
            <img src={outcomeImg} alt="outcome" />
            <span>outcome</span>
          </RadioButton>
        </TransactionTypes>

        <input
          type="text"
          value={category}
          onChange={ event => setCategory(event.target.value)}
          placeholder="category"
        />
        <button type="submit">add</button>
      </Container>
    </Modal>
  );
}
