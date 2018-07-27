// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';

export default class FormInput extends React.Component {
  public render() {
    const Input = styled.input`
      background-color: #fff;
      border: 2px solid ${({ theme }) => theme.color.Button};
      border-radius: ${({ theme }) => theme.radius.Button};
      padding: 8px 12px 9px;
      color: #000;
      font-size: 16px;
      &:focus {
        outline: 8px solid aliceblue;
      }
    `;

    return (
      <>
      <Input />
      </ >
    );
  }
}
