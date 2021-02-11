import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

export const Label = styled.div`
  font-size: 1em;
  font-weight: 600;
  margin-top: 8px;
`;

export const Input = styled.input`
  font-size: 1.2em;
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 7px;
  padding: 8px 14px;
  background-color: #fff;
`;
