import * as React from 'react';
import styled from 'styled-components';

export default (props: { readonly children: JSX.Element[] | JSX.Element | string }) => {
  const CardFooter = styled.div`
    display: flex;
    font-size: 14px;
    justify-self: flex-end;
    width: 100%;
  `;
  return (
    <CardFooter>
      {props.children}
    </CardFooter>
  );
};
