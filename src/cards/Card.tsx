import * as React from 'react';
import styled from 'styled-components';
import CardProps, { CardType } from '../utils/CardProps';

export default ({ children, onClick, type, active = false }: CardProps) => {
  const Card = styled.div`
    border-bottom: ${active ? '8px solid rgba(0, 0, 0, 0.2)' : 'none'};
    border-radius: ${({ theme }) => theme.radius.Card};
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.BodyText};
    cursor: ${onClick ? 'pointer' : 'initial'};
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: ${active ? '152px' : '144px'};
    padding: 16px 20px;
    width: 100%;
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
    <ChosenCard onClick={onClick} role={onClick !== undefined ? 'button' : ''}>
      {children}
    </ChosenCard>
  );
};
