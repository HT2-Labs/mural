import * as React from 'react';
import styled from 'styled-components';
import buttonColorStyles from '../buttons/utils/buttonColorStyles';
import FormProps from './formProps';

const SwitchBody = styled.label`
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
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const FormSwitch = (props: FormProps) => {
  const disabled = props.disabled;
  const color = buttonColorStyles({ disabled });

  const CheckBox = styled.input`
    z-index: 1000;
    &:checked + ${Slider} {
      background-color: ${color.background};
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px #2196f3;
    }
    &:checked + ${Slider}:before {
      transform: translateX(26px);
    }
  `;

  return (
    <SwitchBody>
      <CheckBox type="checkbox" {...props} />
      <Slider />
    </SwitchBody>
  );
};

export default FormSwitch;
