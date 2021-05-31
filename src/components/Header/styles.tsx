import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 2rem 0 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background-color: transparent;
    color: var(--background);
    font-weight: 600;
    border: 2px solid;
    border-radius: 1.6rem;
    padding: .8rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .2s ease-in-out;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;