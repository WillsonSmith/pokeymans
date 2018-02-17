import * as React from 'react';
import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Pokemon from './components/Pokemon';

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
              evolvesFromSpecies {
                identifier
              }
              evolvesIntoSpecies {
                identifier
              }
            }
            id
            height
            weight
            pokemonTypes {
              type {
                identifier
              }
            }
            sprites {
              normal {
                male {
                  front
                }
              }
            }
          }
        }
      }
    }
  `;
  return query;
}

class App extends React.Component<Props, State> {

  state = {
    pokemon: [],
  }

  constructor(props) {
    super(props);
    const { client } = this.props;
    this.changeData();
  }

  async changeData() {
    const res = await this.props.client.query({query: queryPokemon('charizard')});
    const pokemon = res.data.Pokemon.edges.map((pokemon) => pokemon.node);
    this.setState({
      pokemon,
    });
  }

  renderPokemon(): JSX.Element[] {
    return (
      this.state.pokemon.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon}/>;
      })
    );
  }
  
  render() {
    return this.renderPokemon();
  }
}


export default App;
