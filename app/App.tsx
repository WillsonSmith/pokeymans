import * as React from 'react';

interface Props {
  title: string;
}
interface State {}

class App extends React.Component<Props, State> {

  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}


export default App;
