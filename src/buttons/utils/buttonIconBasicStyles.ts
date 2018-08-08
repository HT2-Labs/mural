import styled from 'styled-components';

export interface Props {
  readonly buttonSize: any;
  readonly fontSize: any;
  readonly disabled: any;
}

export default (buttonSize: any, fontSize: any, disabled: any) => {
  const Button = styled.button`
    border-radius: 50%;
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: ${fontSize};
    font-weight: 500;
    padding: 2px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    width: ${buttonSize};
    height: ${buttonSize};
    &:hover {
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }
    &:active {
      box-shadow: none;
    }
    & svg {
      position: relative;
      top: .15em;
    }
  `;
  return Button;
};
