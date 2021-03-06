import styled from '../utils/mural-styled-components';

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  &:hover {
    ${(props) => props.onClick !== undefined ? 'cursor: pointer' : ''};
    ${(props) => props.onClick !== undefined ? 'text-decoration: underline' : ''};
  };
`;

export default CardBody;
