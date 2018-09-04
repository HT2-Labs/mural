// tslint:disable:max-file-line-count
import * as React from 'react';

import { ButtonGroup, ButtonInvisible } from '../../buttons';
import { Card, CardBody, CardFooter } from '../../cards';
import { Media } from '../../media';
import { H2, H4, P } from '../../text';
import { Align } from '../../utils/AlignmentProps';
import { Size } from '../../utils/sizes';
import CardHeroText from '../CardHeroText';

const DocsCardBasic = () => {
  return (
    <Card title="Card Title">
      <CardBody>
        <P>
          The new home for all shared components Defines whether the button is disabled or not
          Defines whether the button is disabled or not
        </P>
        <Card
          title="Card Title"
          onClick={() => {
            alert('hello');
          }}
        >
          <CardBody>
            <P>
              The new home for all shared components Defines whether the button is disabled or not
              Defines whether the button is disabled or not
            </P>
          </CardBody>
          <CardFooter>Card Title</CardFooter>
        </Card>
      </CardBody>
      <CardFooter>Card Title</CardFooter>
    </Card>
  );
};

const DocsCardOnClick = () => {
  return (
    <Card title="A Clickable Card" onClick={() => null}>
      <CardBody>
        <P>This whole card is clickable - woo!</P>
      </CardBody>
      <CardFooter>Card Footer Text</CardFooter>
    </Card>
  );
};

const DocsCardHeroText = () => {
  return (
    <Card
      active
      backgroundColor={({ theme }) => theme.color.Disabled}
      textColor={({ theme }) => theme.color.DisabledText}
    >
      <CardHeroText>
        <H2
          size={Size.Large}
          alignment={Align.Center}
        >
          Shared components!
        </H2>
      </CardHeroText>
    </Card>
  );
};

const DocsCardHeader = ({ overlayContent }: any) => {
  return (
    <Card
      overlayContent={overlayContent}
      onClick={() => {
        alert('clicked');
      }}
    >
      <CardBody>
        <strong>The new home for all shared components</strong>
      </CardBody>
      <CardFooter padding="0">
        <ButtonGroup>
          <ButtonInvisible>First</ButtonInvisible>
          <ButtonInvisible>Second</ButtonInvisible>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

const DocsCardOverlay = ({ overlayContent }: any) => {
  return (
    <Card
      active
      headerColor={({ theme }) => theme.color.Secondary}
      title={<H4>Hello this is a test</H4>}
      overlayContent={overlayContent}
      onClick={() => {
        alert('clicked');
      }}
    >
      <CardBody>
        <H2 size={Size.Large} alignment={Align.Center}>
          Shared components!
        </H2>
        <P alignment={Align.Center}>
          Shared components!
        </P>
      </CardBody>
    </Card>
  );
};

const DocsCardMedia = () => {
  return (
    <Card title="hello">
      <Media
        // tslint:disable-next-line:max-line-length
        url="https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=602ef4d589c4a74e3222e97404621df8&auto=format&fit=crop&w=1000&q=50"
      />
      <CardBody>
        <H2>Hello</H2>
        <P>
          The new home for all shared components Defines whether the button is disabled or not
          Defines whether the button is disabled or not
        </P>
      </CardBody>
      <CardFooter>Card Title</CardFooter>
    </Card>
  );
};

export {
  DocsCardBasic,
  DocsCardOnClick,
  DocsCardHeroText,
  DocsCardHeader,
  DocsCardOverlay,
  DocsCardMedia,
};
