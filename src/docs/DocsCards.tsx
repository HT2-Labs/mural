// tslint:disable:max-file-line-count
// tslint:disable:no-this
// tslint:disable:no-class
import * as React from 'react';
import styled from 'styled-components';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardHighlighted,
  CardPlaceholder,
  CardSplashHeader,
  CardSplashSubText,
  CardSplashText,
  CardTitle,
} from '../Card';

import { Button, GhostButton } from '../buttons';
import { H1, SizeType } from '../Text';
import DocsDescription from './DocsDescription';
import DocsPlayground from './DocsPlayground';

class DocsCards extends React.Component {
  public readonly state = {
    codeSnippet: 'Click component to see example...',
    overlay: false,
  };
  // tslint:disable-next-line:prefer-function-over-method
  public render() {
    const CardGrid = styled.div`
      display: grid;
      grid-column-gap: 20px;
      grid-template-columns: 32% 32% 32%;
      grid-template-rows: 150px;
    `;

    const normalCard = (
      `import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '@ht2-labs/mural/Card';
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
`);

    const cardHighlighted = (
      `import { CardHighlighted, CardSplashHeader, CardSplashText } from '@ht2-labs/mural/Card';

<CardHighlighted active>
  <CardSplashHeader>
    <IconEllipsisV color={'#fff'}/>
  </CardSplashHeader>
  <CardSplashText>
    <strong>Shared components</strong>
  </CardSplashText>
</CardHighlighted>
`);

    const cardPlaceholder = (
      `import { CardPlaceholder, CardSplashText } from '@ht2-labs/mural/Card';

<CardPlaceholder>
  <CardSplashText>
    <strong>Shared components</strong>
  </CardSplashText>
</CardPlaceholder>
`);
    const availableProps = (
      'Prop: active - Default: undefined; Prop: overlayContent - Default: undefined'
    );

    const cardOverlay = (
      `import { Card, CardBody, CardHeader, CardTitle } from '@ht2-labs/mural/Card';
import { Button, GhostButton } from '@ht2-labs/mural/Button';

const overlayContent = (
  <>
    <Button fullWidth>Edit</Button>
    <GhostButton
      fullWidth
      danger
    >Delete</GhostButton>
  </>
);

<Card overlayContent={overlayContent}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardBody>
    <strong>The new home for all shared components</strong>
  </CardBody>
</Card>
`);

    const overlayContent = (
      <>
        <Button fullWidth>Edit</Button>
        <GhostButton
          fullWidth
          danger
        >Delete</GhostButton>
      </>
    );

    return (
      <>
        <H1 size={SizeType.ExtraLarge}>Cards</H1>
        <hr />
        <DocsDescription title="Normal Card">
          <DocsPlayground code={normalCard} props={availableProps}>
            <CardGrid>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardBody>
                  <strong>The new home for all shared components</strong>
                </CardBody>
                <CardFooter>Card Title</CardFooter>
              </Card>
            </CardGrid>
          </DocsPlayground>
        </DocsDescription>

        <DocsDescription title="Higlighted Card">
          <DocsPlayground code={cardHighlighted} props={availableProps}>
            <CardGrid>
              <CardHighlighted active>
                <CardSplashHeader>
                  <CardHeader />
                </CardSplashHeader>
                <CardSplashText>
                  <strong>Shared components</strong>
                  <CardSplashSubText>(0/3) things are cool</CardSplashSubText>
                </CardSplashText>
              </CardHighlighted>
            </CardGrid>
          </DocsPlayground>
        </DocsDescription>

        <DocsDescription title="Placeholder Card">
          <DocsPlayground code={cardPlaceholder} props={availableProps}>
            <CardGrid>
              <CardPlaceholder>
                <CardSplashText>
                  <strong>Shared components</strong>
                </CardSplashText>
              </CardPlaceholder>
            </CardGrid>
          </DocsPlayground>
        </DocsDescription>

        <DocsDescription title="Card with Overlay">
          <DocsPlayground code={cardOverlay}>
            <CardGrid>
              <Card overlayContent={overlayContent}>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardBody>
                  <strong>The new home for all shared components</strong>
                </CardBody>
              </Card>
            </CardGrid>
          </DocsPlayground>
        </DocsDescription>
      </>
    );
  }
}

export default DocsCards;
