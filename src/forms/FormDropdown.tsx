// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import buttonColorStyles from '../buttons/utils/buttonColorStyles';
import { IconChevronDown } from '../Icon';
import FormProps from './FormProps';

export default ({
    disabled = false,
    children,
  }: FormProps) => {

const Container = styled.div`
    width: 200px;
`;
const IconContainer = styled.div`
    position: relative;
    top: 42px;
    width: 0;
    left: 5px;
`;
const activeColor = buttonColorStyles({disabled});
const Dropdown = styled.select`
    width: 100%;
    height: 45px;
    margin: 8px 0;
    border: 0;
    border: 1px solid grey;
    background-color: ${activeColor.background};
    color: ${activeColor.text};
    background-size: 20px;
    background-position:  right 10px center;
    font-family: 'Arial';
    padding-left: 24px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 4px;
       -moz-border-radius: 4px;
            border-radius: 4px;
    &:hover{
      background-color: ${activeColor.backgroundLight};
      transition: 0.25s;
    }
  `;
  return (
    <Container>
      <IconContainer>
        <IconChevronDown color="white"/>
      </IconContainer>
      <Dropdown disabled={disabled}>
        {children}
      </Dropdown>
    </Container>
  );

};
