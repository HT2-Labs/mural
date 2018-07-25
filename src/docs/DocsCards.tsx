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

import IconEllipsisV from '../icons/IconEllipsisV';

import { ButtonType } from '../Button';
import Button from '../buttons/Button';
import DocsCode from './DocsCode';
import DocsSectionTitle from './DocsSectionTitle';

class DocsCards extends React.Component {
  public readonly state = {
    codeSnippet: 'Click component to see example...',
    overlay: false,
  };
  public render() {
    const CardGrid = styled.div`
      display: grid;
      grid-column-gap: 2%;
      grid-row-gap: 20px;
      grid-template-columns: 32% 32% 32%;
      grid-template-rows: 144px;
      margin-bottom: 40px;
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

    const changeCode = (code: string) => {
      this.setState({codeSnippet: code});
    };

    const actionOpen = () => {
      this.setState({overlay: true});
    };

    const actionClose = () => {
      this.setState({overlay: false});
    };

    const test = (
      <CardSplashText>
        <Button onClick={actionClose} fullWidth>Edit</Button>
        <Button
          onClick={actionClose}
          type={ButtonType.Ghost}
          fullWidth
          danger
        >Delete</Button>
      </CardSplashText>
    );

    return (
      <>
        <DocsSectionTitle id="Cards">Cards</DocsSectionTitle>
        <CardGrid>
          <Card
            onClick={() => { changeCode(normalCard); }}
          >
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <IconEllipsisV />
            </CardHeader>
            <CardBody>
              <strong>The new home for all shared components</strong>
            </CardBody>
            <CardFooter>Card Title</CardFooter>
          </Card>

          <Card
            onClick={() => { changeCode(CardHighlighted); }}
            type={CardType.Highlighted}
            active
          >
            <CardSplashHeader>
              <CardHeader />
              <IconEllipsisV color={'#fff'}/>
            </CardSplashHeader>
            <CardSplashText>
              <strong>Shared components</strong>
              <CardSplashSubText>(0/3) things are cool</CardSplashSubText>
            </CardSplashText>
          </Card>

          <Card
            onClick={() => { changeCode(cardPlaceholder); }}
            type={CardType.Placeholder}
          >
            <CardSplashText>
              <strong>Shared components</strong>
            </CardSplashText>
          </Card>

          <Card
            onClick={actionOpen}
            type={CardType.Highlighted}
            overlayContent={test}
            overlay={this.state.overlay}
          >
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <IconEllipsisV />
            </CardHeader>
            <CardBody>
              <strong>The new home for all shared components</strong>
            </CardBody>
            <CardFooter>Card Title</CardFooter>
          </Card>
        </CardGrid>

        <DocsCode code={this.state.codeSnippet} />
      </>
    );
  }
}

export default DocsCards;
