import styled from 'styled-components';

export const Container = styled.div`

  table {
    width: 100%;
    border-spacing: 0 .4rem;
    color: var(--text-body);
  }

  th {
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
  }

  td {
    background-color: var(--shape);
    border: 0;
    padding: 1rem 2rem;

    &:first-child {
      border-radius: .8rem 0 0 .8rem;
      color: var(--text-title);
    }

    &:last-child {
      border-radius: 0 .8rem .8rem 0;
    }

  }

  .deposit {
    color: var(--green);
  }
  .withdraw {
    color: var(--red);
  }

`;