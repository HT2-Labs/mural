// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from 'styled-components';

import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconAsterisk,
  IconBullseye,
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClose,
  IconCode,
  IconCuratr,
  IconEllipsisV,
  IconEye,
  IconFilter,
  IconFlagCheckered,
  IconGithub,
  IconHome,
  IconLink,
  IconNpm,
  IconPlusCircle,
  IconProject,
  IconSearch,
  IconTachometer,
  IconThumbsUp,
  IconTimes,
  IconTimesCircle,
} from '../../../icons';
import { H1, SizeType } from '../../../text';
import { DocsPlayground } from '../../shared';

const codeSnippet =
  `import { IconArrowDown } from '@ht2-labs/mural/src//Icon';

<IconArrowDown />
`;

const DocsIcons = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `;
  const GridItem = styled.div`
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    font-size: 3em;
    flex-direction: column;
    padding: 20px 4px;
  `;
  const GridItemText = styled.div`
    padding-top: 20px;
    font-size: 16px;
  `;
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Icons</H1>
      <hr />
      <DocsPlayground code={codeSnippet}>
        <Grid>
          <GridItem><IconArrowDown /><GridItemText>IconArrowDown</GridItemText></GridItem>
          <GridItem><IconArrowLeft /><GridItemText>IconArrowLeft</GridItemText></GridItem>
          <GridItem><IconArrowRight /><GridItemText>IconArrowRight</GridItemText></GridItem>
          <GridItem><IconArrowUp /><GridItemText>IconArrowUp</GridItemText></GridItem>
          <GridItem><IconAsterisk /><GridItemText>IconAsterisk</GridItemText></GridItem>
          <GridItem><IconBullseye /><GridItemText>IconBullseye</GridItemText></GridItem>
          <GridItem><IconCalendar /><GridItemText>IconCalendar</GridItemText></GridItem>
          <GridItem><IconCheck /><GridItemText>IconCheck</GridItemText></GridItem>
          <GridItem><IconCheckCircle /><GridItemText>IconCheckCircle</GridItemText></GridItem>
          <GridItem><IconChevronDown /><GridItemText>IconChevronDown</GridItemText></GridItem>
          <GridItem><IconChevronLeft /><GridItemText>IconChevronLeft</GridItemText></GridItem>
          <GridItem><IconChevronRight /><GridItemText>IconChevronRight</GridItemText></GridItem>
          <GridItem><IconClose /><GridItemText>IconClose</GridItemText></GridItem>
          <GridItem><IconChevronUp /><GridItemText>IconChevronUp</GridItemText></GridItem>
          <GridItem><IconCuratr /><GridItemText>IconCuratr</GridItemText></GridItem>
          <GridItem><IconEllipsisV /><GridItemText>IconEllipsisV</GridItemText></GridItem>
          <GridItem><IconFilter /><GridItemText>IconFilter</GridItemText></GridItem>
          <GridItem><IconFlagCheckered /><GridItemText>IconFlagCheckered</GridItemText></GridItem>
          <GridItem><IconGithub /><GridItemText>IconGithub</GridItemText></GridItem>
          <GridItem><IconHome /><GridItemText>IconHome</GridItemText></GridItem>
          <GridItem><IconLink /><GridItemText>IconLink</GridItemText></GridItem>
          <GridItem><IconNpm /><GridItemText>IconNpm</GridItemText></GridItem>
          <GridItem><IconPlusCircle /><GridItemText>IconPlusCircle</GridItemText></GridItem>
          <GridItem><IconSearch /><GridItemText>IconSearch</GridItemText></GridItem>
          <GridItem><IconTachometer /><GridItemText>IconTachometer</GridItemText></GridItem>
          <GridItem><IconThumbsUp /><GridItemText>IconThumbsUp</GridItemText></GridItem>
          <GridItem><IconTimes /><GridItemText>IconTimes</GridItemText></GridItem>
          <GridItem><IconTimesCircle /><GridItemText>IconTimesCircle</GridItemText></GridItem>
          <GridItem><IconCode /><GridItemText>IconCode</GridItemText></GridItem>
          <GridItem><IconProject /><GridItemText>IconProject</GridItemText></GridItem>
          <GridItem><IconEye /><GridItemText>IconEye</GridItemText></GridItem>
        </Grid>
      </DocsPlayground>
    </>
  );
};

export default DocsIcons;