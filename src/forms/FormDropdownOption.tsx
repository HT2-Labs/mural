// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import buttonColorStyles from '../buttons/utils/buttonColorStyles';
import FormProps from './FormProps';
export default ({
    disabled = false,
    children,
    value,
  }: FormProps) => {
    const activeColor = buttonColorStyles({disabled});
const Option = styled.option`
    width: 100%;
    height: 45px;
    margin: 8px 0;
    border: 0;
    border: 1px solid black;
    border-top: 4px solid black;
    background: #f00;
    background-size: 20px;
    background-position:  right 10px center;
    font-family: 'Arial';
    padding-left: 24px;
    -ms-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 4px;
       -moz-border-radius: 4px;
            border-radius: 4px;
      &:hover{
      background: ${activeColor.background};
      color: ${activeColor.background};
    }
  `;
  return (
      <Option disabled={disabled} value={value}>
          {children}
      </Option>
  );

};
