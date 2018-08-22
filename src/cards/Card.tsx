// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
import * as React from 'react';
import styled from '../utils/mural-styled-components';

import BaseCard from './utils/BaseCard';
import CardHeader from './utils/CardHeader';
import CardProps from './utils/CardProps';

import { ButtonGroup, IconButtonInvisible } from '../buttons';
import { Size } from '../buttons/IconButtons/iconButtonProps';
import { IconEllipsisV, IconTimes } from '../icons';
import { Align } from '../utils/AlignmentProps';

const OverlayContent = styled.div`
  padding: 12px 16px;
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
      title,
    } = this.props;

    const Overlay = styled.div`
      box-sizing: border-box;
      padding: 4px;
      position: absolute;
      right: 0;
      z-index: 20;
      ${this.state.showOverlay ? 'background-color: #fff' : ''};
      ${this.state.showOverlay ? 'height: 100%' : ''};
      ${this.state.showOverlay ? 'width: 100%' : ''};
    `;

    const actionOpen = () => {
      this.setState({
        showOverlay: true,
      });
    };

    const actionClose = () => {
      this.setState({
        showOverlay: false,
      });
    };

    const renderOverlay = (
      <Overlay>
        <ButtonGroup alignment={Align.Right}>
          {this.state.showOverlay ?
            <IconButtonInvisible onClick={actionClose} size={Size.Small}>
              <IconTimes />
            </IconButtonInvisible> :
            <IconButtonInvisible
              onClick={actionOpen}
              size={Size.Small}
            >
              <IconEllipsisV  />
            </IconButtonInvisible>
          }
        </ButtonGroup>
        {this.state.showOverlay ? <OverlayContent>{overlayContent}</OverlayContent> : null}
      </Overlay>
    );

    return (
      <BaseCard
        role={onClick !== undefined ? 'button' : ''}
        backgroundColor={backgroundColor}
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
