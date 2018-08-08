// tslint:disable:prefer-function-over-method
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

import { Button, ButtonGhost, ButtonGroup, ButtonInvisible } from '../buttons';
import DocsPropsTableHeader from '../docs/DocsPropsTableHeader';
import { IconCheck } from '../Icon';
import Table from '../tables/Table';
import TableCell from '../tables/TableCell';
import TableRow from '../tables/TableRow';
import { H1, SizeType } from '../Text';
import DocsDescription from './DocsDescription';
import DocsPlayground from './DocsPlayground';

class DocsCards extends React.Component {
  public readonly state = {
    codeSnippet: 'Click component to see example...',
    overlay: false,
  };
  public readonly deadClick = () => {
    return null;
  }

  public render() {
    const CardGrid = styled.div`
      display: grid;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
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
    const availableProps =
<Table>
  <DocsPropsTableHeader/>
  <TableRow>
    <TableCell>active</TableCell>
    <TableCell>Boolean</TableCell>
    <TableCell>Undefined</TableCell>
    <TableCell>Size of button</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>overlayContent</TableCell>
    <TableCell>JSX</TableCell>
    <TableCell>Undefined</TableCell>
    <TableCell>Defines whether the button is disabled or not</TableCell>
  </TableRow>
</Table>;

    const cardOverlay = (
      `import { Card, CardBody, CardHeader, CardTitle } from '@ht2-labs/mural/Card';
import { Button, ButtonGhost } from '@ht2-labs/mural/Button';

const overlayContent = (
  <>
    <Button fullWidth>Edit</Button>
    <ButtonGhost
      fullWidth
      danger
    >Delete</ButtonGhost>
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

    // tslint:disable-next-line:prefer-function-over-method
    const overlayContent = (
      <>
        <Button fullWidth>Edit</Button>
        <ButtonGhost
          fullWidth
          danger
        >Delete</ButtonGhost>
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

              <CardHighlighted onClick={this.deadClick}>
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
                <CardFooter>
                   <ButtonGroup>
                      <ButtonInvisible>Beep</ButtonInvisible>
                      <ButtonInvisible>Boop</ButtonInvisible>
                    </ButtonGroup>
                </CardFooter>
              </Card>

              <Card overlayContent={overlayContent}>
              </Card>

              <Card overlayContent={overlayContent}>
              </Card>

              <Card overlayContent={overlayContent}>
              </Card>

              <Card overlayContent={overlayContent}>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
              </Card>

              <Card overlayContent={overlayContent}>
                <CardBody>
                  <strong>The new home for all shared components</strong>
                </CardBody>
              </Card>

              <Card overlayContent={overlayContent}>
                <CardFooter>
                   <ButtonGroup condensed>
                      <ButtonInvisible>Complete <IconCheck/></ButtonInvisible>
                      <ButtonInvisible>Reflect</ButtonInvisible>
                    </ButtonGroup>
                </CardFooter>
              </Card>
            </CardGrid>
          </DocsPlayground>
        </DocsDescription>
      </>
    );
  }
}

export default DocsCards;
