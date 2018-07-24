// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from 'styled-components';

import { Button, ButtonType } from '../Button';

import IconHome from '../icons/IconHome';
import DocsCode from './DocsCode';
import DocsSectionTitle from './DocsSectionTitle';

const normalButton = `import { Button, ButtonType } from '@ht2-labs/mural/Button';

<Button>Button</Button>
<Button type={ButtonType.Ghost}>Ghost Button</Button>
<Button disabled>Disabled Button</Button>
<Button type={ButtonType.Ghost} disabled>Disabled Ghost Button</Button>`;

export default () => {

  const ButtonGrid = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 14px;
    grid-template-columns: repeat(2, 260px);
    margin-bottom: 40px;
  `;

  return (
    <>
      <DocsSectionTitle id="Buttons">Buttons</DocsSectionTitle>
      <ButtonGrid>
        <Button>Button</Button>
        <Button type={ButtonType.Ghost}>Ghost Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button type={ButtonType.Ghost} disabled>Disabled Ghost Button</Button>
        <Button>Button with Icon <IconHome /></Button>
        <Button disabled>Button with Icon <IconHome /></Button>
      </ButtonGrid>
      <hr />
      <DocsCode code={normalButton} />
    </>
  );
};
