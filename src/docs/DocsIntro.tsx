import * as React from 'react';
import styled from 'styled-components';

export default () => {
  const SectionTitle = styled.h3`
    text-align: center;
    font-size: 2rem;
  `;
  const Quote = styled.p`
    font-style: italic;
    padding: 2% 10%;
    text-align: center;
    color: #333;
    font-size: 20px;
  `;
  const Text = styled.p`
    padding: 0 6%;
    font-size: 20px;
  `;
  return (
    <>
      <SectionTitle>The HT2Labs Shared Component Library - Mural</SectionTitle>
      <Text>Multi-use react ? library</Text>
      <Quote>
        A distinguishing characteristic of mural painting is that the architectural
        elements of the given space are harmoniously incorporated into the picture
      </Quote>
      <Text>
        This library of react components is the new home for all shared components between
        HT2 products. If a component exists, is going to exist or could exist, in more than one
        product, it for sure belongs in here.
        <br/>
        Keep things as clean and DRY as possible and feel free to make changes through PRs!
      </Text>
      <hr/>
    </>
  );
};
