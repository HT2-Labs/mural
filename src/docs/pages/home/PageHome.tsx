// tslint:disable:max-line-length
import * as React from 'react';
import styled from '../../../utils/mural-styled-components';

import { Card } from '../../../cards';
import { Media } from '../../../media';
import { H1, H3, P } from '../../../text';
import { Size } from '../../../utils/sizes';
import DocsPage from '../../shared/DocsPage';
import DocsPageProps from '../components/DocsPageProps';

const Quote = styled.p`
  font-style: italic;
  padding: 2% 10%;
  text-align: center;
  color: #333;
  font-size: 20px;
`;

export default ({}: DocsPageProps) => {
  return (
    <DocsPage>
      <H1 size={Size.Giga}>The HT2Labs Component Library - MURAL</H1>
      <Media height="24%" url="https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5627447ed73815773a2fa205a2111ca1&dpr=1&auto=format&fit=crop&w=1200&q=80&cs=tinysrgb" />
      <Quote>
        A distinguishing characteristic of mural painting is that the architectural
        elements of the given space are harmoniously incorporated into the picture
      </Quote>
      <Card></Card>
      <P>This library of react components is the new home for all shared components between
        HT2 products.</P>
      <H3>Start by shipping something good — then make it great</H3>
      <P>As awesome as it would be to have a 100% dependable system, that always offers exactly
        what you need, reality dictates otherwise. A lot of 'planning ahead' goes into the
        components in Mural but this doesn't mean that they are fool proof. We will never catch
        all possible use cases. If you are wanting to use a component in a curtain way but the
        component is lacking functionality, let us know! We can have a chat about it and find a
        solution, be it changing components or adding new ones.</P>
      <hr/>
    </DocsPage>
  );
};
