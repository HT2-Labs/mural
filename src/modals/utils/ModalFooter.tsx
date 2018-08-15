import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  align-items: center;
  display: flex;
  margin-top: auto;
  width: 100%;
`;

const ModalFooter = ({children}: {readonly children: React.ReactNode}) => {
  return <Footer>{children}</Footer>;
};

export default ModalFooter;
