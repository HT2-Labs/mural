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
  CardSplashHeader,
  CardSplashSubText,
  CardSplashText,
  CardTitle,
  CardType,
} from '../Card';

import { Button, GhostButton } from '../Button';
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

    const CardHighlighted = (
      `import { Card, CardSplashHeader, CardSplashText } from '@ht2-labs/mural/Card';

<Card type={CardType.Highlighted} onClick>
  <CardSplashHeader>
    <IconEllipsisV color={'#fff'}/>
  </CardSplashHeader>
  <CardSplashText>
    <strong>Shared components</strong>
  </CardSplashText>
</Card>
`);

    const cardPlaceholder = (
      `import { Card, CardSplashText } from '@ht2-labs/mural/Card';

<Card type={CardType.Placeholder}>
  <CardSplashText>
    <strong>Shared components</strong>
  </CardSplashText>
</Card>
`);

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
          <DocsPlayground code={normalCard}>
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
          <DocsPlayground code={CardHighlighted}>
            <CardGrid>
              <Card
                type={CardType.Highlighted}
                active
              >
                <CardSplashHeader>
                  <CardHeader />
                </CardSplashHeader>
                <CardSplashText>
                  <strong>Shared components</strong>
                  <CardSplashSubText>(0/3) things are cool</CardSplashSubText>
                </CardSplashText>
              </Card>
            </CardGrid>
          </DocsPlayground>
        </DocsDescription>

        <DocsDescription title="Placeholder Card">
          <DocsPlayground code={cardPlaceholder}>
            <CardGrid>
              <Card
                type={CardType.Placeholder}
              >
                <CardSplashText>
                  <strong>Shared components</strong>
                </CardSplashText>
              </Card>
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
