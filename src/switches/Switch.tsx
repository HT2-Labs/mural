import * as React from 'react';
import styled from 'styled-components';
import buttonColorStyles from '../buttons/utils/buttonColorStyles';
import switchProps from './switchProps';

export default ({
  danger = false,
  disabled = false,
}: switchProps) => {
  const color = buttonColorStyles({ danger, disabled });
  const SwitchBody = styled.label`
  border-radius: 50%;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  `;
  const Slider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 13px;
    background-color: ${ color.background };
    -webkit-transition: .4s;
    transition: .4s;
    &:before {
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s
    }
  `;
  const CheckBox = styled.input`
    display:none;
    &:checked + ${Slider} {
      background-color: #2196F3;
    }

    &:focus + ${Slider} {
      box-shadow: 0 0 1px #2196F3;
    }
    &:checked + ${Slider}:before {
      transform: translateX(26px);
    }
  `;
  return (
    <SwitchBody>
    <CheckBox type="checkbox"/>
    <Slider/>
    </SwitchBody>
  );
};
