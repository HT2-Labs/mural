// tslint:disable:max-file-line-count
// tslint:disable:no-this
// tslint:disable:no-class
// tslint:disable:max-line-length
import * as React from 'react';

import { Button, ButtonGroup, GhostButton, IconButton, IconGhostButton, IconInvisibleButton, InvisibleButton } from '../Button';
import { IconAsterisk, IconChevronRight, IconEllipsisV } from '../Icon';
import { H1, H2, P, SizeType } from '../Text';
import DocsCode from './DocsCode';
import DocsPlayground from './DocsPlayground';

import IconBullseye from '../icons/IconBullseye';
import IconCalendar from '../icons/IconCalendar';
import IconFlagCheckered from '../icons/IconFlagCheckered';
import IconTimesCircle from '../icons/IconTimesCircle';

class DocsButton extends React.Component {
  public readonly state = {
    codeSnippet: 'Click component to see example...',
  };
  public render() {
    const normalButton = (
      `import { Button } from '@ht2-labs/mural/Button';

<Button>Button</Button>
<Button disabled>Button</Button>`
    );

    const ghostButton = (
      `import { Button } from '@ht2-labs/mural/Button';

<GhostButton>Ghost Button</GhostButton>
<GhostButton disabled>Disabled Ghost Button</GhostButton>`
    );

    const dangerButton = (
      `import { Button } from '@ht2-labs/mural/Button';

<Button danger>Danger Button</Button>
<GhostButton danger>Danger Ghost Button</GhostButton>`
    );

    const invisibleButton = (
      `import { Button } from '@ht2-labs/mural/Button';

<InvisibleButton>Invisible Button</Button>
<InvisibleButton disabled>Disabled Invisible Button</Button>`
    );

    const changeCode = (code: string) => {
      this.setState({ codeSnippet: code });
    };

    return (
      <>
        <H1 size={SizeType.ExtraLarge}>Buttons</H1>
        <hr />
        <P>This is the default button that should be used.</P>
        <DocsPlayground>
          <ButtonGroup>
            <Button
              onClick={() => { changeCode(normalButton); }}
            >Button</Button>
            <Button disabled>Disabled Button</Button>
          </ButtonGroup>
        </DocsPlayground>

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
        <DocsPlayground> <DocsCode code={this.state.codeSnippet} /> </DocsPlayground>

        <H2 size={SizeType.Large}>IconButton</H2>
        <hr />
        <P>Icon Button</P>
        <ButtonGroup>
          <IconButton><IconAsterisk /></IconButton>
          <IconButton><IconEllipsisV /></IconButton>
          <IconButton><IconChevronRight /></IconButton>
          <IconButton><IconFlagCheckered /></IconButton>
          <IconButton><IconCalendar /></IconButton>
          <IconButton><IconTimesCircle /></IconButton>
          <IconButton><IconBullseye /></IconButton>
        </ButtonGroup>
        <P>Invisible Icon Button</P>
        <ButtonGroup>
          <IconInvisibleButton><IconAsterisk /></IconInvisibleButton>
          <IconInvisibleButton><IconEllipsisV /></IconInvisibleButton>
          <IconInvisibleButton><IconChevronRight /></IconInvisibleButton>
          <IconInvisibleButton><IconFlagCheckered /></IconInvisibleButton>
          <IconInvisibleButton><IconCalendar /></IconInvisibleButton>
          <IconInvisibleButton><IconTimesCircle /></IconInvisibleButton>
          <IconInvisibleButton><IconBullseye /></IconInvisibleButton>
        </ButtonGroup>
        <P>Ghost Icon Button</P>
        <ButtonGroup>
          <IconGhostButton><IconAsterisk /></IconGhostButton>
          <IconGhostButton><IconEllipsisV /></IconGhostButton>
          <IconGhostButton><IconChevronRight /></IconGhostButton>
          <IconGhostButton><IconFlagCheckered /></IconGhostButton>
          <IconGhostButton><IconCalendar /></IconGhostButton>
          <IconGhostButton><IconTimesCircle /></IconGhostButton>
          <IconGhostButton><IconBullseye /></IconGhostButton>
        </ButtonGroup>
        {/* <DocsCode code={codeSnippetButtonGroup} /> */}

        <H2 size={SizeType.Large}>ButtonGroup</H2>
        <hr />
        <P>If you are using more than one button, you should use a ButtonGroup to contain them</P>
      </>
    );
  }
}

export default DocsButton;
