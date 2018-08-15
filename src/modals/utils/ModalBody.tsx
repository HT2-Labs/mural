import * as React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
`;

const ModalBody = ({children}: {readonly children: React.ReactNode}) => {
  return <Body>{children}</Body>;
};

export default ModalBody;
