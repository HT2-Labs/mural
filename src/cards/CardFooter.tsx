import styled from 'styled-components';

const CardFooter = styled.div<{readonly padding?: string}>`
  display: flex;
  margin-top: auto;
  width: 100%;
  padding: ${ (props) => props.padding ? props.padding : '12px 20px 20px'};
`;

export default CardFooter;
