import * as React from 'react';
import styled from 'styled-components';

export default (props: { readonly children: JSX.Element[] | JSX.Element | string }) => {
  const CardTitle = styled.h3`
    font-size: 13px;
    font-weight: normal;
    line-height: 1.25;
    margin: 0 0 14px;
    width: 100%;
  `;
  return (
    <CardTitle>
      {props.children}
    </CardTitle>
  );
};
