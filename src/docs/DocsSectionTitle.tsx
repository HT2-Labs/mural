import * as React from 'react';
import styled from 'styled-components';

export default (props: {
  readonly children: JSX.Element | string;
  readonly id: string;
}) => {
  const DocsSectionTitle = styled.h2`
    font-size: 2rem;
  `;
  return <DocsSectionTitle id={props.id}>{props.children}</DocsSectionTitle>;
};
