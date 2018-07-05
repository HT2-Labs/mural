import * as React from 'react';
import styled from 'styled-components';
import CardProps, { CardType } from '../utils/CardProps';

export default ({ children, onClick, type }: CardProps) => {
  const Card = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 14px 20px;
    width: 100%;
    color: #2f2f2f;
    cursor: ${onClick ? 'pointer' : 'initial'};
  `;
  const NormalCard = styled(Card)`
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow};
  `;
  const HighlightedCard = styled(Card)`
    background-color: ${({ theme }) => theme.colorSecondary};
    border-bottom: 10px solid rgba(0, 0, 0, 0.2);
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.colorPrimaryText};
    min-height: 154px;
  `;
  const PlaceholderCard = styled(Card)`
    background-color: #e0e0e0;
  `;
  const chooseCard = () => {
    if (type === CardType.Highlighted) { return HighlightedCard; }
    if (type === CardType.Placeholder) { return PlaceholderCard; }
    return NormalCard;
  };
  const ChosenCard = chooseCard();

  return (
    <ChosenCard onClick={onClick} role={onClick && 'button'}>
      {children}
    </ChosenCard>
  );
};
