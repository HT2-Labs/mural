import * as React from 'react';
import styled from 'styled-components';

export default (props: { readonly children: JSX.Element[] | JSX.Element | string }) => {
  const CardSplashHeader = styled.div`
    display: flex;
    height: 18px;
    margin-bottom: -18px;
    width: 100%;
  `;
  return (
    <CardSplashHeader>
      {props.children}
    </CardSplashHeader>
  );
};
