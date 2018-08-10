// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import buttonColorStyles from '../buttons/utils/buttonColorStyles';
import FormProps from './FormProps';

export default ({
    disabled = false,
    group,
  }: FormProps) => {

    const activeColor = buttonColorStyles({disabled});
    const RadioBody = styled.label`
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
  `;
    const Slider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    -webkit-transition: .1s;
    transition: .1s;
    border-radius: 50%;
    border: solid 2px #555;
    &:before {
      border-radius: 50%;
      position: absolute;
      content: "";
      top: 4px;
      left: 4px;
      height: 12px;
      width: 12px;
      color: transparent;
      background-color: transparent;
      -webkit-transition: .1s;
      transition: .1s;
      text-align: center;
}

  `;
const CheckBox = styled.input`
    z-index: 1000;
    &:focus + ${Slider} {
      border-color: lightblue;
    }
    &:checked + ${Slider}:before {
      background-color: ${activeColor.backgroundLight};
    }
    &:checked + ${Slider} {
      border-color: ${activeColor.backgroundLight};
    }
  `;
  return (
    <RadioBody>
      <CheckBox type="radio" name={group}/>
      <Slider/>
    </RadioBody>
  );

};
