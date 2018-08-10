// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import buttonColorStyles from '../buttons/utils/buttonColorStyles';
import { IconCheck } from '../Icon';
import FormProps from './FormProps';

export default ({
    disabled = false,
    group,
  }: FormProps) => {

    const activeColor = buttonColorStyles({disabled});
    const SwitchBody = styled.label`
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
    border-radius: 4px;
    border: solid 2px #555;
    &:before {
      border-radius: 2%;
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
      bottom: 4px;
      color: transparent;
      background-color: transparent;
      -webkit-transition: .1s;
      transition: .1s;
      text-align: center;
}
    & svg {
      position: relative;
      top: .025em;
      margin: 2px;
    }
  `;
const CheckBox = styled.input`
    z-index: 1000;
    &:checked + ${Slider} {
      background-color: ${activeColor.backgroundLight};
    }
    &:focus + ${Slider} {
      border-color: lightblue;
    }
    &:checked + ${Slider}:before {
      color: #fff;
    }
    &:checked + ${Slider} {
      border-color: ${activeColor.backgroundLight};
    }
  `;
  return (
    <SwitchBody>
      <CheckBox type="checkbox" name={group}/>
      <Slider> <IconCheck color="white"/></Slider>
    </SwitchBody>
  );

};
