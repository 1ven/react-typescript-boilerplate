import * as React from "react";

interface IAppProps {
  name: string;
}

export class App extends React.Component<IAppProps, {}> {
  render() {
    return <h1>Hello, I am {this.props.name}</h1>;
  }
}
