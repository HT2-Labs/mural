// tslint:disable:max-file-line-count
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';

import { IconCode, IconEye, IconProject } from '../../icons';
import { TabItem, TabMenu } from '../../navigation';
import { H4 } from '../../text';
import { Align } from '../../utils/AlignmentProps';
import DocsCode from './DocsCode';

export enum Tab {
  Preview,
  Code,
  Props,
}

export interface PlaygroundProps {
  readonly children?: React.ReactNode;
  readonly code?: string;
  readonly exampleProps?: any;
  readonly title?: string;
}

const PreviewWrap = styled.div`
  width: 100%;
`;

const Preview = ({ children }: any) => {
  return <PreviewWrap>{children}</PreviewWrap>;
};

const getContent = (content: any, children: any, code: any, exampleProps: any) => {
  switch (content) {
    case Tab.Preview: default: return <Preview children={children} />;
    case Tab.Code: return <DocsCode code={code} />;
    case Tab.Props: return exampleProps;
  }
};

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
  display: flex;
`;

const HeaderTitle = styled.div`
  margin: auto 12px;
  width: 100%;
`;

class DocsPlayground extends React.Component<PlaygroundProps> {

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
    if (this.props.exampleProps !== undefined) {
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

    return (
      <PlayGround>
        <Header>
          <HeaderTitle><H4 color={'#222'}>Example: {this.props.title}</H4></HeaderTitle>
          <TabMenu alignment={Align.Right} ariaLabel="Playground">
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
        <Content aria-label={Tab[this.state.playgroundTab]}>
          {getContent(
            this.state.playgroundTab,
            this.props.children,
            this.props.code,
            this.props.exampleProps,
          )}
        </Content>
      </PlayGround>
    );
  }
}

export default DocsPlayground;
