import * as React from 'react';
import styled from 'styled-components';

export default (props: { readonly children: JSX.Element[] | JSX.Element | string }) => {
  const CardHeader = styled.div`
    display: flex;
    height: 18px;
    margin-bottom: 10px;
    width: 100%;
  `;
  return (
    <CardHeader>
      {props.children}
    </CardHeader>
  );
};
