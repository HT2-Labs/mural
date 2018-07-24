import * as React from 'react';
import styled from 'styled-components';

import { Button, ButtonType } from '../Button';

import IconCuratr from '../icons/IconCuratr';
import IconHome from '../icons/IconHome';
import DocsCode from './DocsCode';
import DocsSectionTitle from './DocsSectionTitle';

// tslint:disable:no-this
// tslint:disable-next-line:no-class
class DocsButton extends React.Component {
  public readonly state = {
    codeSnippet: 'Click component to see example...',
  };
  public render() {
    const normalButton = (
`import { Button, ButtonType } from '@ht2-labs/mural/Button';

<Button>Button</Button>
<Button danger>Button with Icon <IconHome /></Button>
<Button disabled>Button</Button>`
    );

    const ghostButton = (
`import { Button, ButtonType } from '@ht2-labs/mural/Button';

<Button type={ButtonType.Ghost}>Ghost Button</Button>
<Button type={ButtonType.Ghost} danger>Button with Icon <IconCuratr /></Button>
<Button type={ButtonType.Ghost} disabled>Disabled Button</Button>`
    );

    const changeCode = (code: string) => {
      this.setState({codeSnippet: code});
    };

    const ButtonGrid = styled.div`
      display: grid;
      grid-column-gap: 20px;
      grid-row-gap: 14px;
      grid-template-columns: repeat(2, 2fr);
      margin-bottom: 40px;
    `;

    return (
      <>
        <DocsSectionTitle id="Buttons">Buttons</DocsSectionTitle>
        <ButtonGrid>
          <Button
            onClick={() => changeCode(normalButton)}
          >Button</Button>

          <Button
            onClick={() => changeCode(ghostButton)}
            type={ButtonType.Ghost}
          >Ghost Button</Button>

          <Button
            onClick={() => changeCode(normalButton)}
            danger
          >Button with Icon <IconHome /></Button>

          <Button
            onClick={() => changeCode(ghostButton)}
            type={ButtonType.Ghost}
            danger
          >Button with Icon <IconCuratr /></Button>

          <Button
            onClick={() => changeCode(normalButton)}
            disabled
          >Disabled Button</Button>

          <Button
            onClick={() => changeCode(ghostButton)}
            type={ButtonType.Ghost}
            disabled
          >Disabled Ghost Button</Button>
        </ButtonGrid>

        Buttons will adjust their width to their content by default. To force them to
        use their space, add the <code>fullWidth</code> prop.
        <Button
          onClick={() => changeCode(normalButton)}
        >Button</Button>

        <Button
          onClick={() => changeCode(normalButton)}
          fullWidth
        >Button</Button>
        <hr />
        <DocsCode code={this.state.codeSnippet} />
      </>
    );
  }
}

export default DocsButton;
