import * as React from 'react';
import styled from '../utils/mural-styled-components';
import { Size } from './sizes';

export interface IconProps {
  readonly textColor?: string;
  readonly size?: Size;
  readonly height?: number | string;
  readonly width?: number | string;
}

const Svg = styled.svg<IconProps>`
  fill: ${(props) => props.textColor !== undefined ? props.textColor : 'currentColor'};
  height: ${(props) => props.height !== undefined ? props.height : '1em'};
  width: ${(props) => props.width !== undefined ? props.width : '1em'};
`;

export default (renderSvg: () => React.ReactNode, viewBox = '0 0 512 512') => {
  return (props: IconProps) => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...props}>
        ${renderSvg()}
      </Svg>
    );
  };
};
