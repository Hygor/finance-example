import styled from 'styled-components';

export const Container = styled.div`

  max-width: 68rem;
  margin: -6rem auto 4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  & > div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .8rem;
    color: var(--text-title); 
  }

  .positive {
    background-color: var(--green);
    color: var(--shape);
  }
  .negative {
    background-color: var(--red);
    color: var(--shape);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: normal;
      font-size: 1rem;
    }
  }

  strong {
    display: inline-block;
    line-height: 3rem;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: normal;
  }

`;
