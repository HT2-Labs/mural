// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:max-line-length
import * as React from 'react';
import { Button } from '../Button';
import IconChevronDown from '../icons/IconChevronDown';

const Child = ({ children }: any) => (
  <div>
    {children}
  </div>
);

export default class Parent extends React.Component<{ readonly text?: String }, { readonly isHidden: Boolean; readonly text?: String }> {
  public constructor(props: any) {
    super(props);
    this.state = {
      isHidden: true,
      text: 'click to show',
    };
  }
  public toggleHidden() {
    this.setState({
      isHidden: this.state.isHidden === true,
    });
  }
  public render() {
    return (
      <div>
        <Button onClick={this.toggleHidden.bind(this)} >
          {this.state.text} <IconChevronDown />
        </Button>
        {this.state.isHidden !== true ? <Child children={this.props.children} /> : null}
      </div>
    );
  }
}
