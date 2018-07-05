import * as React from 'react';
import styled from 'styled-components';

import DocsSectionTitle from './DocsSectionTitle';

export default () => {
  const Quote = styled.p`
    font-style: italic;
    padding: 2% 10%;
    text-align: center;
    color: #333;
    font-size: 20px;
  `;
  const SubTitle = styled.p`
    text-align: center
    font-size: 24px;
    font-style: italic;
  `;
  const Text = styled.p`
    padding: 0 6%;
    font-size: 20px;
  `;
  return (
    <>
      <DocsSectionTitle id="Intro">The HT2Labs Component Library - MURAL</DocsSectionTitle>
      <SubTitle><b>M</b>ulti-<b>U</b>se <b>R</b>eact <b>A</b>esthetics <b>L</b>ibrary</SubTitle>
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
