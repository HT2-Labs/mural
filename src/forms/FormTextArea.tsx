// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import { SizeType } from '../Text';
import H3 from '../text/H1';

export interface Props {
    readonly label?: string;
    readonly placeholder?: string;
}

export default class FormInput extends React.Component<Props> {
    private getLabel() {
        if (this.props.label !== undefined) {
            return(<H3 size={SizeType.Body}>{this.props.label}</H3>);
        }
        return null;
    }
  public render() {
    const Input = styled.textarea`
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.color.Button};
      border-radius: ${({ theme }) => theme.radius.Button};
      margin-top: 4px;
      padding: 8px 12px 9px;
      color: #000;
      font-size: 16px;
      min-width: 52px;
      min-height: 20px;
      &:focus {
        outline: 8px solid aliceblue;
      }
    `;
    const InputContainer = styled.div`

    `;
    return (
      <>
      <InputContainer>
        {this.getLabel()}
        <Input placeholder={this.props.placeholder}/>
      </InputContainer>
      </ >
    );
  }
}
