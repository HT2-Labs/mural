import styled from 'styled-components';
import { getSize, Size } from '../../utils/sizes';

export interface Props {
  readonly fullWidth: boolean | undefined;
  readonly disabled: boolean | undefined;
}

export default ({ fullWidth = false, disabled = false }: Props) => {
  const Button = styled.button`
    border-radius: ${({ theme }) => theme.radius.Small};
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: ${getSize(Size.Small, Size.Small)};;
    font-weight: 500;
    padding: 8px 12px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    width: ${fullWidth ? '100%' : 'auto'};
    &:hover {
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
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
