// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import { Button } from '../Button';
import IconChevronDown from '../icons/IconChevronDown';

// tslint:disable-next-line:max-line-length
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
      isHidden: !this.state.isHidden,
    });
  }
  public render() {
    return (
      <div>
        <Button onClick={this.toggleHidden.bind(this)} >
          {this.state.text} <IconChevronDown />
        </Button>
        {!this.state.isHidden && <Child children={this.props.children} />}
      </div>
    );
  }
}

const Child = ({ children }: any) => (
  <div>
    {children}
  </div>
);
