import styled from 'styled-components';

export interface Props {
  readonly fullWidth: any;
  readonly disabled: any;
}

export default (fullWidth: any, disabled: any) => {
  const Button = styled.button`
    border-radius: ${({ theme }) => theme.radius.Button};
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    width: ${fullWidth ? '100%' : 'auto'};
    &:hover {
      box-shadow: ${disabled ? 'none' : ({ theme }) => theme.shadow.Large};
      transform: ${disabled ? 'none' : 'translate3D(0, 2px, 0)'};
      transition: all 0.15s ease 0s;
    }
    &:active {
      box-shadow: none;
    }
    & svg {
      position: relative;
      top: .1em;
    }
  `;
  return Button;
};
