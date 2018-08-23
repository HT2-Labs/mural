import * as React from "react";

import { ButtonGroup, ButtonInvisible } from "../../buttons";
import { Card, CardBody, CardFooter } from "../../cards";
import { H2, H4, P, SizeType } from "../../text";
import { Align } from "../../utils/AlignmentProps";
import CardHeroText from "../CardHeroText";

const DocsCardBasic = () => {
  return (
    <Card title="Card Title">
      <CardBody>
        <P>
          The new home for all shared components Defines whether the button is
          disabled or not Defines whether the button is disabled or not
        </P>
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
    <Card active backgroundColor={({ theme }) => theme.color.Disabled}>
      <CardHeroText>
        <H2
          color={({ theme }: any) => theme.color.DisabledText}
          size={SizeType.Large}
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
    <Card overlayContent={overlayContent}>
      <CardBody>
        <strong>The new home for all shared components</strong>
      </CardBody>
      <CardFooter>
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
      title={<H4 size={SizeType.Medium}>Hello this is a test</H4>}
      overlayContent={overlayContent}
    >
      <CardBody>
        <H2 size={SizeType.Large} alignment={Align.Center}>
          Shared components!
        </H2>
        <P size={SizeType.Medium} alignment={Align.Center}>
          Shared components!
        </P>
      </CardBody>
    </Card>
  );
};

export {
  DocsCardBasic,
  DocsCardOnClick,
  DocsCardHeroText,
  DocsCardHeader,
  DocsCardOverlay
};
