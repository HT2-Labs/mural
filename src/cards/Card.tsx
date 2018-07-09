import * as React from 'react';
import styled from 'styled-components';
import CardProps, { CardType } from '../utils/CardProps';

export default ({ children, onClick, type, selected }: CardProps) => {
  const Card = styled.div`
    border-bottom: ${selected !== undefined ? '10px solid rgba(0, 0, 0, 0.2)' : 'none'};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-sizing: border-box;
    color: #2f2f2f;
    cursor: ${onClick !== undefined ? 'pointer' : 'initial'};
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: ${selected !== undefined ? '154px' : '144px'};
    padding: 14px 20px;
    width: 100%;
  `;
  const NormalCard = styled(Card)`
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow};
  `;
  const HighlightedCard = styled(Card)`
    background-color: ${({ theme }) => theme.colorSecondary};
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.colorPrimaryText};
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
    <ChosenCard onClick={onClick} role={onClick !== undefined ? 'button' : ''}>
      {children}
    </ChosenCard>
  );
};
