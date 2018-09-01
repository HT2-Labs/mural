import styled from '../../utils/mural-styled-components';

const DocsPage = styled.div`
  background-color: ${({ theme }) => theme.color.White};
  max-width: 1000px;
  width: 100%;
  margin: 2em auto;
  box-shadow: 0 1.2rem 3.6rem rgba(0,0,0,.2);
  padding: 2em;
  border-radius: ${(props) => props.theme.radius.Small};
`;

export default DocsPage;
