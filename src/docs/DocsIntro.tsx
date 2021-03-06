import * as React from 'react';
import styled from 'styled-components';

import { H1, P } from '../text';
import { Size } from '../utils/sizes';
import DocsPageProps from './pages/components/DocsPageProps';

const Quote = styled.p`
  font-style: italic;
  padding: 2% 10%;
  text-align: center;
  color: #333;
  font-size: 20px;
`;

export default ({}: DocsPageProps) => {
  return (
    <>
      <H1 size={Size.Large}>The HT2Labs Component Library - MURAL</H1>
      <Quote>
        A distinguishing characteristic of mural painting is that the architectural
        elements of the given space are harmoniously incorporated into the picture
      </Quote>
      <P>
        This library of react components is the new home for all shared components between
        HT2 products. If a component exists, is going to exist or could exist, in more than one
        product, it for sure belongs in here.
        <br/>
        Keep things as clean and DRY as possible and feel free to make changes through PRs!
      </P>
      <hr/>
    </>
  );
};
