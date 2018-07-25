import * as React from 'react';
import styled from 'styled-components';
import { CardHeader } from '../Card';
import IconTimes from '../icons/IconTimes';
import CardActions from './CardActions';
import CardProps, { CardType } from './CardProps';

export default ({
  children,
  onClick,
  type,
  overlayContent,
  active = false,
  overlay = false,
}: CardProps) => {
  const Card = styled.div`
    border-bottom: ${active ? '8px solid rgba(0, 0, 0, 0.2)' : 'none'};
    border-radius: ${({ theme }) => theme.radius.Card};
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.BodyText};
    cursor: ${onClick !== undefined ? 'pointer' : 'initial'};
    width: 100%;
    overflow: hidden;
    position: ${ overlay ? 'relative' : 'unset'};
  `;

  const InnerCard = styled.div`
    box-sizing: border-box;
    display: flex;
    filter: ${ overlay ? 'blur(3px)' : 'none'};
    flex-direction: column;
    height: 100%;
    padding: 16px 20px;
  `;

  const OverlayContent = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    height: 100%;
    padding: 16px 20px;
    position: absolute;
    width: 100%;
    z-index: 20;
  `;

  const NormalCard = styled(Card)`
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.shadow.Main};
  `;
  const HighlightedCard = styled(Card)`
    background-color: ${({ theme }) => theme.color.Secondary};
    box-shadow: ${({ theme }) => theme.shadow.main};
    color: ${({ theme }) => theme.color.SecondaryText};
  `;
  const PlaceholderCard = styled(Card)`
    background-color: ${({ theme }) => theme.color.Disabled};
    color: ${({ theme }) => theme.color.DisabledText};
  `;

  const chooseCard = () => {
    if (type === CardType.Highlighted) { return HighlightedCard; }
    if (type === CardType.Placeholder) { return PlaceholderCard; }
    return NormalCard;
  };
  const ChosenCard = chooseCard();

  return (
    <ChosenCard
      onClick={onClick}
      role={onClick !== undefined ? 'button' : ''}
    >
      {!!overlay ? (
        <OverlayContent>
          <CardHeader>
            <CardActions>
              <IconTimes color={'#000'}/>
            </CardActions>
          </CardHeader>
          {overlayContent}
        </OverlayContent>
      ) : null}
      <InnerCard>
        {children}
      </InnerCard>
    </ChosenCard>
  );
};
