import * as React from 'react';
import styled from 'styled-components';

export default (props: { readonly children: JSX.Element[] | JSX.Element | string }) => {
  const CardBody = styled.div`
    display: flex;
    font-size: 16px;
    height: 100%;
    line-height: 1.19;
    width: 100%;
  `;
  return (
    <CardBody>
      {props.children}
    </CardBody>
  );
};
