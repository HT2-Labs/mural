// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from 'styled-components';

import Card, { CardType } from '../cards/Card';
import CardBody from '../cards/CardBody';
import CardFooter from '../cards/CardFooter';
import CardHeader from '../cards/CardHeader';
import CardSplashHeader from '../cards/CardSplashHeader';
import CardSplashSubText from '../cards/CardSplashSubText';
import CardSplashText from '../cards/CardSplashText';
import CardTitle from '../cards/CardTitle';
import Text, { ElementType } from '../text/Text';

import IconEllipsisV from '../icons/IconEllipsisV';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/styles/hljs';
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
  import Card from '@ht2-labs/mural/dist/cards/Card';
  import CardBody from '@ht2-labs/mural/dist/cards/CardBody';
  import CardFooter from '@ht2-labs/mural/dist/cards/CardFooter';
  import CardHeader from '@ht2-labs/mural/dist/cards/CardHeader';
  import CardTitle from '@ht2-labs/mural/dist/cards/CardTitle';

  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <IconEllipsisV />
    </CardHeader>
    <CardBody>
      <p>The new home for all shared components</p>
    </CardBody>
    <CardFooter>Card Title</CardFooter>
  </Card>
  `;

  const CardHighlighted = `
  import Card from '@ht2-labs/mural/dist/cards/Card';
  import CardSplashHeader from '@ht2-labs/mural/dist/cards/CardSplashHeader';
  import CardSplashText from '@ht2-labs/mural/dist/cards/CardSplashText';

  <Card type={CardType.Highlighted} onClick>
    <CardSplashHeader>
      <IconEllipsisV color={'#fff'}/>
    </CardSplashHeader>
    <CardSplashText>
      <Text>Shared components</Text>
    </CardSplashText>
  </Card>
  `;

  const cardPlaceholder = `
  import Card from '@ht2-labs/mural/dist/cards/Card';
  import CardSplashText from '@ht2-labs/mural/dist/cards/CardSplashText';

  <Card type={CardType.Placeholder}>
    <CardSplashText>
      <Text>Shared components</Text>
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
            <Text type={ElementType.P}>The new home for all shared components</Text>
          </CardBody>
          <CardFooter>
            <Text type={ElementType.P}>Some footer text</Text>
          </CardFooter>
        </Card>
        <Card type={CardType.Highlighted} active>
          <CardSplashHeader>
            <CardHeader />
            <IconEllipsisV color={'#fff'}/>
          </CardSplashHeader>
          <CardSplashText>
            <Text type={ElementType.P}>Shared components</Text>
            <CardSplashSubText>(0/3) things are cool</CardSplashSubText>
          </CardSplashText>
        </Card>
        <Card type={CardType.Placeholder}>
          <CardSplashText>
            <Text type={ElementType.P}>Shared components</Text>
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
