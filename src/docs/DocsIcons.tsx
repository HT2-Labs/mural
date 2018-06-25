import * as React from 'react';
import styled from 'styled-components';

import IconArrowDown from '../icons/IconArrowDown';
import IconArrowLeft from '../icons/IconArrowLeft';
import IconArrowRight from '../icons/IconArrowRight';
import IconArrowUp from '../icons/IconArrowUp';
import IconAsterisk from '../icons/IconAsterisk';
import IconBullseye from '../icons/IconBullseye';
import IconCalendar from '../icons/IconCalendar';
import IconCheck from '../icons/IconCheck';
import IconCheckCircle from '../icons/IconCheckCircle';
import IconChevronDown from '../icons/IconChevronDown';
import IconChevronLeft from '../icons/IconChevronLeft';
import IconChevronRight from '../icons/IconChevronRight';
import IconChevronUp from '../icons/IconChevronUp';
import IconEllipsisV from '../icons/IconEllipsisV';
import IconFilter from '../icons/IconFilter';
import IconFlagCheckered from '../icons/IconFlagCheckered';
import IconHome from '../icons/IconHome';
import IconLink from '../icons/IconLink';
import IconPlusCircle from '../icons/IconPlusCircle';
import IconSearch from '../icons/IconSearch';
import IconTachometer from '../icons/IconTachometer';
import IconThumbsUp from '../icons/IconThumbsUp';
import IconTimes from '../icons/IconTimes';
import IconTimesCircle from '../icons/IconTimesCircle';

export default () => {
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
        <GridItem><IconChevronUp /><GridItemText>IconChevronUp</GridItemText></GridItem>
        <GridItem><IconEllipsisV /><GridItemText>IconEllipsisV</GridItemText></GridItem>
        <GridItem><IconFilter /><GridItemText>IconFilter</GridItemText></GridItem>
        <GridItem><IconFlagCheckered /><GridItemText>IconFlagCheckered</GridItemText></GridItem>
        <GridItem><IconHome /><GridItemText>IconHome</GridItemText></GridItem>
        <GridItem><IconLink /><GridItemText>IconLink</GridItemText></GridItem>
        <GridItem><IconPlusCircle /><GridItemText>IconPlusCircle</GridItemText></GridItem>
        <GridItem><IconSearch /><GridItemText>IconSearch</GridItemText></GridItem>
        <GridItem><IconTachometer /><GridItemText>IconTachometer</GridItemText></GridItem>
        <GridItem><IconThumbsUp /><GridItemText>IconThumbsUp</GridItemText></GridItem>
        <GridItem><IconTimes /><GridItemText>IconTimes</GridItemText></GridItem>
        <GridItem><IconTimesCircle /><GridItemText>IconTimesCircle</GridItemText></GridItem>
      </Grid>
    </>
  );
};
