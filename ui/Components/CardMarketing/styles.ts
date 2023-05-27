import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100vh;
`;
export const Content = styled.div`
    width: 100%;
    background-color: #fab702;
    grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
