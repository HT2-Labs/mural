// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from '../Button';
import DocsCode from './DocsCode';

const Example = ({ children }) => {
  return <div>{children}</div>;
};

export enum Tab {
  Example,
  Code,
  Props,
}

const getContent = (content, children) => {
  switch (content) {
    case Tab.Example: default: return <Example children={children} />;
    case Tab.Code: return <DocsCode code={`${children}`} />;
    case Tab.Props: return '80px';
  }
};

export default class Parent extends React.Component {

  public readonly state = {
    exampleTab: Tab,
    text: 'click to show',
  };

  public swapTab(tab: any) {
    this.setState({
      exampleTab: tab,
    });
  }

  public render() {
    const PlayGround = styled.div`
      padding: 40px;
      background-color: #eee;
    `;

    return (
      <PlayGround>
        <ButtonGroup>
          <Button onClick={() => { this.swapTab(Tab.Example); }} >
            Example
          </Button>
          <Button onClick={() => { this.swapTab(Tab.Code); }} >
            Code
          </Button>
          <Button onClick={() => { this.swapTab(Tab.Props); }} >
            Props
          </Button>
        </ButtonGroup>
        {getContent(this.state.exampleTab, this.props.children)}
      </PlayGround>
    );
  }
}
