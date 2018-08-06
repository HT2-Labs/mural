// tslint:disable:max-file-line-count
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';

import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import DocsCode from './DocsCode';

import { IconCode, IconProject } from '../Icon';
import IconEye from '../icons/IconEye';
import { Align } from '../utils/AlignmentProps';

const Preview = ({ children }: any) => {
  const PreviewWrap = styled.div`
    width: 100%;
  `;
  return <PreviewWrap>{children}</PreviewWrap>;
};

export enum Tab {
  Preview,
  Code,
  Props,
}

export interface PlaygroundProps {
  readonly code?: String;
  readonly props?: any;
  readonly children?: any;
}

const getContent = (content: any, children: any, code: any, props: any) => {
  switch (content) {
    case Tab.Preview: default: return <Preview children={children} />;
    case Tab.Code: return <DocsCode code={code} />;
    case Tab.Props: return props;
  }
};

export default class extends React.Component<PlaygroundProps> {

  public readonly state = {
    playgroundTab: 0,
  };

  public swapTab(tab: any) {
    this.setState({
      playgroundTab: tab,
    });
  }

  public getCodeButton() {
    if (this.props.code !== undefined) {
      return (
        <TabItem
          active={this.checkIfActive(Tab.Code)}
          onClick={() => { this.swapTab(Tab.Code); }}
        >
          Code <IconCode />
        </TabItem>
      );
    }
    return null;
  }

  public getPropsButton() {
    if (this.props.props !== undefined) {
      return (
        <TabItem
          active={this.checkIfActive(Tab.Props)}
          onClick={() => { this.swapTab(Tab.Props); }}
        >
          Props <IconProject />
        </TabItem>
      );
    }
    return null;
  }

  public checkIfActive(tab: any) {
    return Number(this.state.playgroundTab) === tab ? true : false;
  }

  public render() {
    const PlayGround = styled.div`
      background-color: #f0f0f0;
      margin-bottom: 20px;
    `;

    const Content = styled.div`
      padding: 16px;
      display: flex;
      justify-content: center;
    `;

    const Header = styled.div`
      background-color: #eaeaea;
    `;

    return (
      <PlayGround>
        <Header>
          <TabMenu alignment={Align.Right}>
            <TabItem
              active={this.checkIfActive(Tab.Preview)}
              onClick={() => { this.swapTab(Tab.Preview); }}
            >
              Preview <IconEye />
            </TabItem>
            {this.getCodeButton()}
            {this.getPropsButton()}
          </TabMenu>
        </Header>
        <Content>
          {getContent(
            this.state.playgroundTab,
            this.props.children,
            this.props.code,
            this.props.props,
          )}
        </Content>
      </PlayGround >
    );
  }
}
