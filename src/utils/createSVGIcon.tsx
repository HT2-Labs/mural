import * as React from 'react';
import styled from 'styled-components';
import IconProps from '../icons/IconProps';

export default (renderSvg: () => React.ReactNode, viewBox = '0 0 512 512') => {
  return ({ width = '1em', height = '1em', color = 'currentColor' }: IconProps) => {
    const Svg = styled.svg`
      fill: ${color};
      height: ${height};
      width: ${width};
      margin-left: 4px;
    `;

    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        ${renderSvg()}
      </Svg>
    );
  };
};
