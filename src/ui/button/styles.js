import styled from 'styled-components';

export const BaseButton = styled.button`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.color};
  padding: 0.2em 1em;
  border-radius: 6px;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.green};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.paleGeen};
  }
`;
