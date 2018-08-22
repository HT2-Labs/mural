const DocsCardBasicCode =
`import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { P } from '@ht2-labs/mural/text';

export default () => {
  return(
    <Card title="Card Title">
      <CardBody>
        <P>Card Body</P>
      </CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  );
}
`

const DocsCardHeroTextCode =
`import {
  Card,
  CardHeroText,
} from '@ht2-labs/mural/cards';
import { H2 } from '@ht2-labs/mural/text';

export default () => {
  return(
    <Card
      backgroundColor={({theme}) => theme.color.Disabled}
    >
      <CardHeroText>
        <H2
          color={({theme}: any) => theme.color.DisabledText}
          size={SizeType.Large}
          alignment={Align.Center}
        >Shared components!</H2>
      </CardHeroText>
    </Card>
  );
}
`

const DocsCardHeaderCode =
`import {
  ButtonGroup,
  ButtonInvisible,
} from '@ht2-labs/mural/buttons';
import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { P } from '@ht2-labs/mural/text';

export default = ({overlayContent}) => {
  return(
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
}
`

const DocsCardOverlayCode =
`import {
  ButtonGroup,
  ButtonInvisible,
} from '@ht2-labs/mural/buttons';
import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { H2, H4, P } from '@ht2-labs/mural/text';
import { Align } from '@ht2-labs/mural/utils/AlignmentProps';


export default ({overlayContent}) => {
  return(
    <Card
      headerColor={({theme}) => theme.color.Secondary}
      title={<H4 size={SizeType.Medium}>Hello this is a test</H4>}
      overlayContent={overlayContent}
    >
      <CardBody>
        <H2 size={SizeType.Large}>Shared components!</H2>
        <P size={SizeType.Medium}>Shared components!</P>
      </CardBody>
    </Card>
  );
}
`

export {
  DocsCardBasicCode,
  DocsCardHeroTextCode,
  DocsCardHeaderCode,
  DocsCardOverlayCode,
}