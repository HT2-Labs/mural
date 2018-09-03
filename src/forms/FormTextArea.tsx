// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import { Label } from '../text';
import FormProps from './formProps';

const Input = styled.textarea`
  background-color: #fff;
  border: 2px solid #888;
  border-radius: ${({ theme }) => theme.radius.Small};
  padding: 8px 12px 9px;
  color: #000;
  font-size: 16px;
  min-width: 52px;
  min-height: 20px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.color.Button};
    border: 2px solid ${({ theme }) => theme.color.Button};
  }
`;
class FormTextArea extends React.Component<FormProps> {
  public render() {
    return (
      <>
        {this.props.label !== undefined ? <Label margin>{this.props.label}</Label> : null}
        <Input {...this.props} />
      </>
    );
  }
}

export default FormTextArea;
