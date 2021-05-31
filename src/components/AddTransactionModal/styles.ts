import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`

  h2 {
    margin-bottom: 1.5em;
  }

  input {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1.6rem;
    border: 1px solid var(--background);
    background-color: var(--background);
  }

  button {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.6rem;
    font-weight: 600;

    &[type="submit"] {
      border: none;
      background-color: var(--green);
    }
  }

`;

export const TransactionTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem 0;
  gap: 1rem;
`;


interface RadioBoxProps {
  value: 'deposit' | 'withdraw';
}

export const RadioButton = styled.button<RadioBoxProps>`

  background-color: white;
  justify-content: space-between;
  padding: 0 1rem;
  border: 2px solid var(--background);

  &.active {
    &[value="deposit"] {
      border-color: var(--green);
      background-color: ${ transparentize(0.9, 'darkturquoise') }
    }

    &[value="withdraw"] {
      border-color: var(--red);
      background-color: ${ transparentize(0.9, 'tomato') }

    }
  }

  span {
    flex: 1;
  }

`;