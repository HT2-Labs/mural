import * as React from 'react';
import styled from 'styled-components';

import { ListContainer, ListItem } from '../List';
import { H1, H2, SizeType } from '../Text';

import DocsPlayground from './DocsPlayground';

const codeSnippet =
  `import { ListContainer, ListItem } from '@ht2-labs/mural/List';

<ListContainer>
  <ListItem>Sirius</ListItem>
  <ListItem>Canopus</ListItem>
  <ListItem>Arcturus</ListItem>
  <ListItem>Alpha Centauri A</ListItem>
  <ListItem>Vega</ListItem>
  <ListItem>Rigel</ListItem>
  <ListItem>Procyon</ListItem>
  <ListItem>Achernar</ListItem>
  <ListItem>Betelgeuse</ListItem>
  <ListItem>Hadar (Agena)</ListItem>
  <ListItem>Capella A</ListItem>
  <ListItem>Altair</ListItem>
  <ListItem>Aldebaran</ListItem>
  <ListItem>Capella</ListItem>
  <ListItem>Spica</ListItem>
  <ListItem>Antares</ListItem>
  <ListItem>Pollux</ListItem>
  <ListItem>Fomalhaut</ListItem>
  <ListItem>Deneb</ListItem>
  <ListItem>Mimosa</ListItem>
</ListContainer>
`;

export default () => {

  const Wrapper = styled.div`
    height: 400px;
    width: 400px;
  `;

  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Lists</H1>
      <hr />
      <DocsPlayground code={codeSnippet}>
        <Wrapper>
          <ListContainer>
            <ListItem>Sirius</ListItem>
            <ListItem>Canopus</ListItem>
            <ListItem>Arcturus</ListItem>
            <ListItem>Alpha Centauri A</ListItem>
            <ListItem>Vega</ListItem>
            <ListItem>Rigel</ListItem>
            <ListItem>Procyon</ListItem>
            <ListItem>Achernar</ListItem>
            <ListItem>Betelgeuse</ListItem>
            <ListItem>Hadar (Agena)</ListItem>
            <ListItem>Capella A</ListItem>
            <ListItem>Altair</ListItem>
            <ListItem>Aldebaran</ListItem>
            <ListItem>Capella</ListItem>
            <ListItem>Spica</ListItem>
            <ListItem>Antares</ListItem>
            <ListItem>Pollux</ListItem>
            <ListItem>Fomalhaut</ListItem>
            <ListItem>Deneb</ListItem>
            <ListItem>Mimosa</ListItem>
          </ListContainer>
        </Wrapper>
        <H2 size={SizeType.Large}>Examples</H2>
        <hr />
      </DocsPlayground>
    </>
  );
};
