import * as React from 'react';
import styled from 'styled-components';

const ClickScreen = styled.div`
  bottom: 0px;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1010;
`;

const ModalClickScreen = ({onClick}: {
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return <ClickScreen onClick={onClick} />;
};

export default ModalClickScreen;
