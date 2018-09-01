// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import { Label } from '../text';
import { Size } from '../utils/sizes';
import FormProps from './formProps';

const Input = styled.textarea`
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.color.Button};
  border-radius: ${({ theme }) => theme.radius.Small};
  margin-top: 4px;
  padding: 8px 12px 9px;
  color: #000;
  font-size: 16px;
  min-width: 52px;
  min-height: 20px;
  &:focus {
    outline: 4px solid ${({ theme }) => theme.color.ButtonLight};
  }
`;

class FormTextArea extends React.Component<FormProps> {

  public render() {
    return (
      <>
        {this.props.label !== undefined
          ? <Label size={Size.Default}>{this.props.label}</Label>
          : null
        }
        <Input {...this.props}/>
      </>
    );
  }
}

export default FormTextArea;
