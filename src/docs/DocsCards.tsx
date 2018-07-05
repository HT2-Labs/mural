// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from 'styled-components';

import Card from '../cards/Card';
import CardBody from '../cards/CardBody';
import CardFooter from '../cards/CardFooter';
import CardHeader from '../cards/CardHeader';
import CardSplashHeader from '../cards/CardSplashHeader';
import CardSplashSubText from '../cards/CardSplashSubText';
import CardSplashText from '../cards/CardSplashText';
import CardTitle from '../cards/CardTitle';
import IconEllipsisV from '../icons/IconEllipsisV';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/styles/hljs';
import { CardType } from '../utils/CardProps';
import DocsSectionTitle from './DocsSectionTitle';

export default () => {

  const CardGrid = styled.div`
    display: grid;
    grid-column-gap: 2%;
    grid-template-columns: 32% 32% 32%;
    grid-template-rows: 144px;
    margin-bottom: 40px;
  `;

  const normalCard = `
  import Card from '@HT2-Labs/react-components/dist/cards/Card';
  import CardBody from '@HT2-Labs/react-components/dist/cards/CardBody';
  import CardFooter from '@HT2-Labs/react-components/dist/cards/CardFooter';
  import CardHeader from '@HT2-Labs/react-components/dist/cards/CardHeader';
  import CardTitle from '@HT2-Labs/react-components/dist/cards/CardTitle';

  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <IconEllipsisV />
    </CardHeader>
    <CardBody>
      <strong>The new home for all shared components</strong>
    </CardBody>
    <CardFooter>Card Title</CardFooter>
  </Card>
  `;

  const CardHighlighted = `
  import Card from '@HT2-Labs/react-components/dist/cards/Card';
  import CardSplashHeader from '@HT2-Labs/react-components/dist/cards/CardSplashHeader';
  import CardSplashText from '@HT2-Labs/react-components/dist/cards/CardSplashText';

  <Card type={CardType.Highlighted} onClick>
    <CardSplashHeader>
      <IconEllipsisV color={'#fff'}/>
    </CardSplashHeader>
    <CardSplashText>
      <strong>Shared components</strong>
    </CardSplashText>
  </Card>
  `;

  const cardPlaceholder = `
  import Card from '@HT2-Labs/react-components/dist/cards/Card';
  import CardSplashText from '@HT2-Labs/react-components/dist/cards/CardSplashText';

  <Card type={CardType.Placeholder}>
    <CardSplashText>
      <strong>Shared components</strong>
    </CardSplashText>
  </Card>
  `;

  return (
    <>
      <DocsSectionTitle id="Cards">Cards</DocsSectionTitle>
      <CardGrid>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <IconEllipsisV />
          </CardHeader>
          <CardBody>
            <strong>The new home for all shared components</strong>
          </CardBody>
          <CardFooter>Card Title</CardFooter>
        </Card>
        <Card type={CardType.Highlighted}>
          <CardSplashHeader>
            <CardHeader />
            <IconEllipsisV color={'#fff'}/>
          </CardSplashHeader>
          <CardSplashText>
            <strong>Shared components</strong>
            <CardSplashSubText>(0/3) things are cool</CardSplashSubText>
          </CardSplashText>
        </Card>
        <Card type={CardType.Placeholder}>
          <CardSplashText>
            <strong>Shared components</strong>
          </CardSplashText>
        </Card>
      </CardGrid>

      <SyntaxHighlighter language="javascript" style={obsidian}>
        {normalCard}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={obsidian}>
        {CardHighlighted}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={obsidian}>
        {cardPlaceholder}
      </SyntaxHighlighter>
    </>
  );
};
