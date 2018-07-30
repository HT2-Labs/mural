// tslint:disable:max-file-line-count
// tslint:disable:no-this
// tslint:disable:no-class
// tslint:disable:max-line-length
import * as React from 'react';

import { Button, ButtonGroup, ButtonType, GhostButton, InvisibleButton } from '../Button';

import { IconChevronRight } from '../Icon';
import { H1, H2, P, SizeType } from '../Text';
import DocsCode from './DocsCode';

class DocsButton extends React.Component {
  public readonly state = {
    codeSnippet: 'Click component to see example...',
  };
  public render() {
    const normalButton = (
`import { Button, ButtonType } from '@ht2-labs/mural/Button';

<Button>Button</Button>
<Button disabled>Button</Button>`
    );

    const ghostButton = (
`import { Button, ButtonType } from '@ht2-labs/mural/Button';

<GhostButton>Ghost Button</GhostButton>
<GhostButton disabled>Disabled Ghost Button</GhostButton>`
    );

    const dangerButton = (
`import { Button, ButtonType } from '@ht2-labs/mural/Button';

<Button danger>Danger Button</Button>
<GhostButton danger>Danger Ghost Button</GhostButton>`
    );

    const invisibleButton = (
`import { Button, ButtonType } from '@ht2-labs/mural/Button';

<InvisibleButton>Invisible Button</Button>
<InvisibleButton disabled>Disabled Invisible Button</Button>`
    );

    const changeCode = (code: string) => {
      this.setState({codeSnippet: code});
    };

    const codeSnippetButtonGroup =
`<ButtonGroup>
  <Button>Button</Button>
  <Button type={ButtonType.Ghost}>Disabled Button</Button>
</ButtonGroup>`;

    return (
      <>
        <H1 size={SizeType.ExtraLarge}>Buttons</H1>
        <hr />
        <P>This is the default button that should be used.</P>
        <ButtonGroup>
          <Button
            onClick={() => { changeCode(normalButton); }}
          >Button</Button>
          <Button disabled>Disabled Button</Button>
        </ButtonGroup>

        <P>Ghost buttons can be used as a secondary option or to overlay on splash images. Ghost buttons can have their color overwritten by using the <code>ghostColor</code> prop.</P>
        <ButtonGroup>
          <GhostButton
            onClick={() => { changeCode(ghostButton); }}
          >Ghost Button</GhostButton>
          <GhostButton
            disabled
          >Disabled Ghost Button</GhostButton>
        </ButtonGroup>

        <P>Use the <code>danger</code> prop to signify a destructive action (the color is set in the theme).</P>
        <ButtonGroup>
          <Button
            onClick={() => { changeCode(dangerButton); }}
            danger
          >Danger !</Button>
          <GhostButton
            onClick={() => { changeCode(dangerButton); }}
            danger
          >Danger Ghost Button</GhostButton>
        </ButtonGroup>

        <P>Only use invisible buttons in combination with other buttons (i.e. in a  <code>ButtonGroup</code>). Do NOT use them by themselves as this can be confusing.</P>
        <ButtonGroup>
          <InvisibleButton
            onClick={() => { changeCode(invisibleButton); }}
            >Invisible Button <IconChevronRight /></InvisibleButton>
          <InvisibleButton
          onClick={() => { changeCode(invisibleButton); }}
            disabled
          >Disabled Invisible Button <IconChevronRight /></InvisibleButton>
        </ButtonGroup>

        <P>Buttons will adjust their width to their content by default. To force them to
        use their space, add the <code>fullWidth</code> prop.</P>

        <H2 size={SizeType.Large}>Examples</H2>
        <DocsCode code={this.state.codeSnippet} />

        <H2 size={SizeType.Large}>IconButton</H2>
        <hr />
        <P>Coming soon...</P>
        {/* <DocsCode code={codeSnippetButtonGroup} /> */}

        <H2 size={SizeType.Large}>ButtonGroup</H2>
        <hr />
        <P>If you are using more than one button, you should use a ButtonGroup to contain them</P>
        <DocsCode code={codeSnippetButtonGroup} />
      </>
    );
  }
}

export default DocsButton;
