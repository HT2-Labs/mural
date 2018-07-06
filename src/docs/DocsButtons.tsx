// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from 'styled-components';

import Button from '../buttons/Button';

// Import SyntaxHighlighter from 'react-syntax-highlighter';
// Import { obsidian } from 'react-syntax-highlighter/styles/hljs';
import { ButtonType } from '../utils/ButtonProps';
import DocsSectionTitle from './DocsSectionTitle';

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
      </ButtonGrid>
      <hr />
    </>
  );
};
