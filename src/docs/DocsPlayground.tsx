// tslint:disable:max-file-line-count
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import { ButtonGroup, InvisibleButton } from '../Button';
import DocsCode from './DocsCode';

import { IconChevronLeft, IconChevronRight, IconEllipsisV } from '../Icon';
import IconCheckCircle from '../icons/IconCheckCircle';
import { Align } from '../utils/AlignmentProps';

const Example = ({ children }: any) => {
  return <div>{children}</div>;
};

export enum Tab {
  Example,
  Code,
  Props,
}

export interface PlaygroundProps {
  readonly code?: String;
  readonly props?: String;
  readonly children?: any;
}

const getContent = (content: any, children: any, code: any, props: any) => {
  switch (content) {
    case Tab.Example: default: return <Example children={children} />;
    case Tab.Code: return <DocsCode code={code} />;
    case Tab.Props: return props;
  }
};

export default class extends React.Component<PlaygroundProps> {

  public readonly state = {
    playgroundTab: Tab,
  };

  public swapTab(tab: any) {
    this.setState({
      playgroundTab: tab,
    });
  }

  public getCodeButton() {
    if (this.props.code !== undefined) {
      return (
        <InvisibleButton onClick={() => { this.swapTab(Tab.Code); }} >
          Code <IconChevronLeft /><IconChevronRight />
        </InvisibleButton>
      );
    }
    return null;
  }

  public getPropsButton() {
    if (this.props.props !== undefined) {
      return (
        <InvisibleButton onClick={() => { this.swapTab(Tab.Props); }} >
          Props <IconEllipsisV />
        </InvisibleButton>
      );
    }
    return null;
  }

  public render() {

    const PlayGround = styled.div`
      background-color: #f0f0f0;
      padding: 8px;
    `;

    const Content = styled.div`
      padding: 12px;
    `;

    return (
      <PlayGround>
        <ButtonGroup alignment={Align.Right}>
          <InvisibleButton onClick={() => { this.swapTab(Tab.Example); }} >
            Example <IconCheckCircle />
          </InvisibleButton>
          {this.getCodeButton()}
          {this.getPropsButton()}
        </ButtonGroup>
        <Content>
          {getContent(
            this.state.playgroundTab,
            this.props.children,
            this.props.code,
            <code>{this.props.props}</code>,
          )}
        </Content>
      </PlayGround>
    );
  }
}
