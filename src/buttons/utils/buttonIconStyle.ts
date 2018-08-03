import styled from 'styled-components';

export interface Props {
  readonly buttonSize: Any;
  readonly fontSize: Any;
  readonly disabled: Any;
}

export default (buttonSize, fontSize, disabled) => {
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
      background-color: #168ccc;
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
