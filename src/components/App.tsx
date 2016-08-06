import * as React from "react";

export interface AppProps {
  name: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return <h1>Hello, I am {this.props.name}</h1>;
  }
}
