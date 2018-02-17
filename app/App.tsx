import * as React from 'react';
import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

interface Props {
  title: string
  client: ApolloClient<NormalizedCacheObject>
}
interface State {}

function queryPokemon(name) {
  const query = gql`
    query {
      Pokemon (filter:{identifier:"${name}"}) {
        edges {
          node {
            species {
              identifier
            }
          }
        }
      }
    }
  `;
  return query;
}

const queryBerries = gql`{Berries{id}}`;

class App extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    const { client } = this.props;
    // client.query({query: queryBerries});
  }
  
  render() {
    console.log(queryBerries);
    debugger
    return (
      <span>hi</span>
    )
  }
}


export default App;
