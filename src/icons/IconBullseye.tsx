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
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 72c101.689 0 184 82.295 184 184 0 101.689-82.295 184-184 184-101.689 
      0-184-82.295-184-184 0-101.689 82.295-184 184-184m0-64C119.033 8 8 119.033 8 256s111.033 
      248 248 248 248-111.033 248-248S392.967 8 256 8zm0 184c35.29 0 64 28.71 64 64s-28.71 
      64-64 64-64-28.71-64-64 28.71-64 64-64m0-64c-70.692 0-128 57.308-128 128s57.308 128 
      128 128 128-57.308 128-128-57.308-128-128-128z"/>
    </Svg>
  );
};
