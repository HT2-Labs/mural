import * as React from 'react';
import styled from 'styled-components';
import IconProps from '../utils/IconProps';

export default ({ width = '1em', height = '1em', color = 'inherit' }: IconProps) => {

  const Svg = styled.svg`
    fill: ${color};
    height: ${height};
    width: ${width};
  `;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
      <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24
      80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2
      72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/>
    </Svg>
  );
};
