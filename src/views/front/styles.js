import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 6px;
  padding: 30px 0 20px 0;

  > button {
    margin-top: 8px;
  }
`;
