// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
import * as React from 'react';
import styled from '../utils/mural-styled-components';

import BaseCard from './utils/BaseCard';
import CardHeader from './utils/CardHeader';
import CardOverlay from './utils/CardOverlay';
import CardProps from './utils/CardProps';

import { ButtonGroup, IconButtonInvisible } from '../buttons';
import { Size } from '../buttons/IconButtons/iconButtonProps';
import { IconEllipsisV, IconTimes } from '../icons';
import { Align } from '../utils/AlignmentProps';

const OverlayContent = styled.div`
  padding: 12px 32px;
  margin-top: -32px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

class Card extends React.Component<CardProps> {
  public static readonly defaultProps = {
    active: false,
  };

  public readonly state = {
    showOverlay: false,
  };

  public render() {
    const {
      backgroundColor,
      children,
      headerColor,
      onClick,
      overlayContent,
      textColor,
      title,
    } = this.props;

    const actionOpen = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      this.setState({
        showOverlay: true,
      });
    };

    const actionClose = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      this.setState({
        showOverlay: false,
      });
    };

    const renderOverlay = (
      <CardOverlay backgroundColor={backgroundColor} showOverlay={this.state.showOverlay}>
        <ButtonGroup alignment={Align.Right}>
          {this.state.showOverlay ? (
            <IconButtonInvisible onClick={actionClose} size={Size.Small}>
              <IconTimes />
            </IconButtonInvisible>
          ) : (
            <IconButtonInvisible onClick={actionOpen} size={Size.Small}>
              <IconEllipsisV />
            </IconButtonInvisible>
          )}
        </ButtonGroup>
        {this.state.showOverlay ? <OverlayContent>{overlayContent}</OverlayContent> : null}
      </CardOverlay>
    );

    return (
      <BaseCard
        role={onClick !== undefined ? 'button' : ''}
        backgroundColor={backgroundColor}
        textColor={textColor}
        onClick={onClick}
      >
        {overlayContent !== undefined ? renderOverlay : null}
        {title !== undefined ? <CardHeader headerColor={headerColor}>{title}</CardHeader> : null}
        {children}
      </BaseCard>
    );
  }
}

export default Card;
