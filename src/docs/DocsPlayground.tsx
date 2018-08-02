// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:max-line-length
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

const getContent = (content: any, children: any, code: any, props: any) => {
  switch (content) {
    case Tab.Example: default: return <Example children={children} />;
    case Tab.Code: return <DocsCode code={code} />;
    case Tab.Props: return props;
  }
};

export default class Parent extends React.Component<{ readonly code?: String; readonly props?: String; readonly children?: any }> {

  public readonly state = {
    exampleTab: Tab,
    text: 'click to show',
  };

  public swapTab(tab: any) {
    this.setState({
      exampleTab: tab,
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
    return ('');
  }

  public getPropsButton() {
    if (this.props.props !== undefined) {
      return (
        <InvisibleButton onClick={() => { this.swapTab(Tab.Props); }} >
          Props <IconEllipsisV />
        </InvisibleButton>
      );
    }
    return ('');
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
            this.state.exampleTab,
            this.props.children,
            this.props.code,
            <code>{this.props.props}</code>,
          )}
        </Content>
      </PlayGround>
    );
  }
}
