import * as React from 'react';
import styled from 'styled-components';

export interface CardBodyProps {
  readonly children?: React.ReactNode;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CardBody = ({ children, onClick }: CardBodyProps) => {

  const CardBodyContainer = styled.div`
    display: flex;
    font-size: 16px;
    height: 100%;
    line-height: 1.19;
    padding: 12px 0 12px 20px;
    &:hover {
      ${onClick !== undefined ? 'cursor: pointer' : ''};
      ${onClick !== undefined ? 'text-decoration: underline' : ''};
    }
  `;

  return (
    <CardBodyContainer onClick={onClick}>
      {children}
    </CardBodyContainer>
  );
};

export default CardBody;
