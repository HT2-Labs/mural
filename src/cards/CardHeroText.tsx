import styled from '../utils/mural-styled-components';

const CardHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  height: 100%;
  &:hover {
    ${(props) => props.onClick !== undefined ? 'cursor: pointer' : ''};
    ${(props) => props.onClick !== undefined ? 'text-decoration: underline' : ''};
  };
`;

export default CardHeroText;
