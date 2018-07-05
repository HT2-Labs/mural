import * as React from 'react';
import styled from 'styled-components';
import CardProps, { CardType } from '../utils/CardProps';

export default ({ children, onClick, type }: CardProps) => {
  const Card = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 14px 20px;
    width: 100%;
  `;
  const NormalCard = styled(Card)`
    background-color: #fff;
  `;
  const HighlightedCard = styled(Card)`
    background-color: ${({ theme }) => theme.colorSecondary};
    border-bottom: 10px solid rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.colorPrimaryText};
    min-height: 154px;
  `;
  const PlaceholderCard = styled(Card)`
    background-color: #e0e0e0;
  `;
  // Const isLink = styled(Card)`
  //   Cursor: pointer;
  // `;
  const chooseCard = () => {
    if (type === CardType.Highlighted) { return HighlightedCard; }
    if (type === CardType.Placeholder) { return PlaceholderCard; }
    return NormalCard;
  };
  const ChosenCard = chooseCard();

  return (
    <ChosenCard onClick={onClick}>
      {children}
    </ChosenCard>
  );
};
