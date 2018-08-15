import * as React from 'react';
import styled from 'styled-components';
import { ButtonGroup, IconButtonInvisible } from '../../buttons';
import { IconTimes } from '../../icons';
import { Align } from '../../utils/AlignmentProps';

const Card = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.Body};
  bottom: 0px;
  display: flex;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1400;
`;

const Container = styled.div`
  height: 80%;
  max-width: 70%;
  padding: 20px;
  width: 100%;
  z-index: 1600;
`;

const Overlay = styled.div`
  box-sizing: border-box;
  padding: 4px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
`;

const ModalCard = (props: {
  readonly children: React.ReactNode | React.ReactNode[];
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <Card>
      <Overlay>
        <ButtonGroup alignment={Align.Right}>
          <IconButtonInvisible onClick={props.onClick}>
            <IconTimes />
          </IconButtonInvisible>
        </ButtonGroup>
      </Overlay>

      <Container>
        {props.children}
      </Container>
    </Card>
  );
};

export default ModalCard;
