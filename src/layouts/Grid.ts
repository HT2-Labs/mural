import styled from '../utils/mural-styled-components';

const Grid = styled.div<{
  readonly columns?: number;
  readonly rowHeight?: string;
}>`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  ${(props) => props.columns !== undefined
    ? `grid-template-columns: repeat(${props.columns}, ${props.columns}fr)`
    : 'grid-template-columns: repeat(1, 1fr)'
  };
  ${(props) => props.rowHeight !== undefined
    ? `grid-template-rows: repeat(auto-fill, ${props.rowHeight})`
    : `grid-template-rows: repeat(auto-fill, 1fr)`
  };
`;

export default Grid;
