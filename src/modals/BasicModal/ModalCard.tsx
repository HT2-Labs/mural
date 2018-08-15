import * as React from 'react';
import styled from 'styled-components';
import { ButtonGroup, IconButtonInvisible } from '../../buttons';
import { IconTimes } from '../../icons';
import { Align } from '../../utils/AlignmentProps';

const Card = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }: any) => theme.radius.Small};
  height: auto;
  max-width: 70%;
  padding: 20px;
  position: absolute;
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
      {props.children}
    </Card>
  );
};

export default ModalCard;
